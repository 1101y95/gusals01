import express from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'


const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

//get요청이 들어왔을때
app.get("/users", function (req,res){
    res.send(a) //응답보내기
})

app.get("/5", function (req,res){
    res.send(b) //응답보내기
})

app.post('/user',function (req,res){
    
    console.log(req);
    console.log(req.body);
    res.send(a)
})

app.post('/5',function (req,res){
    
    console.log(req);
    console.log(req.body);
    res.send(b)
})

app.listen(3000);


const a = [
    { 
        email : "aaa@gmail.com", 
        name : "철수",
        phone : "01012345678",
        personal : "220110-2222222",
        prefer : "https://naver.com"
    },
    { 
        email : "aaa@gmail.com", 
        name : "철수",
        phone : "01012345678",
        personal : "220110-2222222",
        prefer : "https://naver.com"
    },
    { 
        email : "aaa@gmail.com", 
        name : "철수",
        phone : "01012345678",
        personal : "220110-2222222",
        prefer : "https://naver.com"
    },
    { 
        email : "aaa@gmail.com", 
        name : "철수",
        phone : "01012345678",
        personal : "220110-2222222",
        prefer : "https://naver.com"
    },
    { 
        email : "aaa@gmail.com", 
        name : "철수",
        phone : "01012345678",
        personal : "220110-2222222",
        prefer : "https://naver.com"
    }
]

const b =[
    { name: '아메리카노', kcal: 5 },
    { name: '아메리카노', kcal: 5 },
    { name: '아메리카노', kcal: 5 },
    { name: '아메리카노', kcal: 5 },
    { name: '아메리카노', kcal: 5 },
    { name: '아메리카노', kcal: 5 },
    { name: '아메리카노', kcal: 5 },
    { name: '아메리카노', kcal: 5 },
    { name: '아메리카노', kcal: 5 },
    { name: '아메리카노', kcal: 5 }  
]