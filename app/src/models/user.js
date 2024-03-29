"use strict";

const userstorage = require("./userstorage");

class user{
    constructor(body){
        this.body = body;
    }

    //async - await
    async login(){
        const client = this.body;
        try{
            const { id, psword } = await userstorage.getuserinfo(client.id);
            if(id){
                if(id===client.id && psword===client.psword){
                    return {success : true};
                }
                return {success : false, msg:"비밀번호가 틀렸습니다"};
            }
            return {success : false, msg:"존재하지 않는 아이디입니다"};
        } catch(err){
            return {success:false, msg:err};
        }
    
    }

    async signup(){
        const client = this.body;
        try{
            const response = await userstorage.save(client);
            return response;
        } catch (err){
            return {success : false, msg :err};
        }
    }
};

module.exports = user;