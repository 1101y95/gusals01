function createTokenOfPhone(phone, count){
    
    //휴대폰번호가 알맞은지 판단하는 코드
   const isValidationPhone = checkValidationPhone(phone)

    //토큰을 만드는 코드
    if(isValidationPhone===true){
        const result = getToken(count)

        //핸드폰번호로 토큰을 전송하는 코드
        sendTokenToSMS(phone,result)
    }
  
}

createTokenOfPhone("01012341234", 6)




function checkValidationPhone(phone){
     //휴대폰번호가 알맞은지 판단하는 코드
     if(phone.length !== 10 && phone.length !== 11){
        console.log("에러발생! 휴대폰 번호를 제대로 입력해주세요")
        return false;
    }
    return true;
}

function getToken(count){
    //토큰을 만드는 코드
    if(count === undefined){
        console.log("에러발생! 갯수를 입력해주세요"); return;
    }else if(count<=0){
        console.log("에러발생! 갯수가 너무 적습니다"); return;
    }else if(count>=10){
        console.log("에러발생! 갯수가 너무 많습니다"); return;
    }

    const result = String(Math.floor(Math.random()*10**count)).padStart(count,"0")

    return result;
}

function sendTokenToSMS(phone,token){
    console.log(`${phone}번호로 ${token}를 전송합니다`);
}