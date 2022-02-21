import express from "express"

const app = express();

app.post("/product/buy", (req,res)=>{
    //상품 구매하기

    //1.가진 돈을 검증하는 코드
    //2.판매여부 검증하는 코드
    //3.상품 구매하는 코드
    //4. if(돈있음&&판매중)
    res.send("상품을 구매합니다")
})

app.post("/product/refund", (req,res)=>{
    //상품 환불하기

    //1.판매여부를 검증하는 코드
    //if(판매완료)
    //2.상품을 환불하는 코드
    res.send("상품을 환불합니다")
})

app.listen(3000)