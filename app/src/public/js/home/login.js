"use strict";

//front -> server로 데이터 보내기
//DOM(Document Object Model) ; js에서 html에 존재하는 데이터를 가져와서 제어

const id = document.querySelector("#id"),
    psword = document.querySelector("#pw"),
    loginBtn = document.querySelector("#btn");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };

    fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/";
            }
            else{
                alert(res.msg);
            }
        })
            .catch((err) => {
                console.error(new Error('login중 에러 발생'));
            });
}