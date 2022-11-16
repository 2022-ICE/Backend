"use strict";

const main = (req,res) => {
    res.render("home/main");
};

const login = (req,res) => {
    res.render("home/login");
};

module.exports = {
    main,
    login
};