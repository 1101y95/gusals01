import puppeteer from "puppeteer";
import mongoose from "mongoose";
import {Stock} from "./model/stock.model.js"

mongoose.connect("mongodb://local:27017/codecamp")

async function startCrawling(){
    const browser = await puppeteer.launch({headless: false})

    const page = await browser.newPage()
    await page.setViewport({width:1280, height: 720})
    await page.goto("https://finance.naver.com/item/sise.naver?code=005930")
    await page.waitForTimeout(1000)

    const iframePage = await page.frames().find(iframe=> iframe.url().includes("/item/sise_day.naver?code=005930"))

    for(let i=3; i<=7; i++){
        await page.waitForTimeout(3000)
        const myDate = await iframePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`, el=>el.textContent)
        const myPrice = await iframePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`, el => el.textContent)


        const stock = new Stock({
            name: "삼성전자",
            date: myDate,
            price: Number(myPrice.replace(",",""))
        })

        await stock.save();


        console.log(`날짜 : ${myDate}, 가격: ${myPrice}`)

    }

    await browser.close();
}

startCrawling()

//MongooseError: Operation `stocks.insertOne()` buffering timed out after 10000ms at Timeout.<anonymous>
//껐다켰는데도 해결안됨...시발
