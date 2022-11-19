"use strict";

//front -> server로 데이터 보내기
//DOM(Document Object Model) ; js에서 html에 존재하는 데이터를 가져와서 제어

//id랑 학번이랑 같은거다..! login(id) == signup(학번==id로 이미 되어있군)
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#pw"),
    psword_check = document.querySelector("#pwcheck"),
    email = document.querySelector("#email"),
    grade = document.querySelector("#area"),
    // gender = document.querySelector("#"),
    signupBtn = document.querySelector("#btn");


signupBtn.addEventListener("click", signup);

function signup(){
    if(!name.value) return alert("이름을 입력해주세요.");
    if(!id.value) return alert("학번을 입력해주세요.");
    if(!psword.value || !psword_check.value) return alert("비밀번호를 입력해주세요.");
    if(!email.value) return alert("이메일을 입력해주세요.");
    if(!grade.value) return alert("학번을 입력해주세요.");
    if(psword.value !== psword_check.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        name : name.value,
        id : id.value,
        psword : psword.value,
        psword_check : psword_check.value,
        email : email.value,
        grade : grade.value,
    };
    console.log(req);
    

    fetch("/signup",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/login";
            }
            else{
                alert(res.msg);
            }
        })
            .catch((err) => {
                console.error(new Error('signup중 에러 발생'));
            });


}