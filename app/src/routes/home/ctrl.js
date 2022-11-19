"use strict";

const User = require("../../models/user"); //이거 소문자로 받아오니까 밑에 login에서 같은 소문자로 user변수 선언할때 에러발생
const userstorage = require("../../models/userstorage");

const output = {
    main : (req,res) => {
        res.render("home/main");
    },
    
    login : (req,res) => {
        res.render("home/login");
    },

    signup : (req,res) => {
        res.render("home/signup");
    },
}; //output오브젝트를 만든 후 그 안에 키값형태로 컨트롤러 선언

//user에 로그인할때 넣은 req.body(id, psword)를 넣고 있게 한다.
const process = {
    login : (req,res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    signup : (req,res) => {
        const user = new User(req.body);
        const response = user.signup();
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
};