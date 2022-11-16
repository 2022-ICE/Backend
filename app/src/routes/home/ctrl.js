"use strict";

const output = {
    main : (req,res) => {
        res.render("home/main");
    },
    
    login : (req,res) => {
        res.render("home/login");
    },
} //output오브젝트를 만든 후 그 안에 키값형태로 컨트롤러 선언

const users = {
    id: ["test1", "test2", "test3"],
    psword : ["q1", "q12", "q123"]
}

const process = {
    login : (req,res) => {
        const id = req.body.id,
            psword = req.body.psword;
        
        if (users.id.includes(id)){ //id가 사용자에 있냐
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){
                return res.json({
                    success : true,
                });
            }
        }
    return res.json({
        success : false,
        msg : "로그인 실패",
    });    
    }
}




module.exports = {
    output,
    process,
};