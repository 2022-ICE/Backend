"use strict";

const userstorage = require("./userstorage");

class user{
    constructor(body){
        this.body = body;
    }

    login(){
        const client = this.body;
        const { id, psword } = userstorage.getuserinfo(client.id);
        if(id){
            if(id===client.id && psword===client.psword){
                return {success : true};
            }
            return {success : false, msg:"비밀번호가 틀렸습니다"};
        }
        return {success : false, msg:"존재하지 않는 아이디입니다"};
    }

    signup(){
        const client = this.body;
        const response = userstorage.save(client);
        return response;
    }
};

module.exports = user;