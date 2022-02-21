import express from "express"

const app = express();

app.post("/product/buy", (req,res)=>{
    //상품 구매하기
    res.send("상품을 구매합니다")
})

app.post("/product/refund", (req,res)=>{
    //상품 환불하기
    res.send("상품을 환불합니다")
})

app.listen(3000)