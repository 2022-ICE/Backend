"use strict";

const userstorage = require("../../models/userstorage");

const output = {
    main : (req,res) => {
        res.render("home/main");
    },
    
    login : (req,res) => {
        res.render("home/login");
    },
} //output오브젝트를 만든 후 그 안에 키값형태로 컨트롤러 선언

//user에 로그인할때 넣은 req.body(id, psword)를 넣고 있게 한다.
const process = {
    login : (req,res) => {
        const id = req.body.id,
            psword = req.body.psword;

        // const userstorage = new userstorage();
        const users = userstorage.getusers("id", "psword");

        const response = {};
        if (users.id.includes(id)){ //id가 사용자에 있냐
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){
                    response.success = true;
                    return res.json(response);
            } 
        }
    response.success = false;
    response.msg = "로그인 실패"    
    return res.json(response);
    },
};

module.exports = {
    output,
    process,
};