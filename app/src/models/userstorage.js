"use strict";

const db = require("../config/db");

class userstorage{

    // static getusers(isAll, ...fields){
        
    // }

    //db에 접근한 후 해당 id의 유저 정보 반환
    static getuserinfo(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query( query, [id], (err,data)=>{
                if(err) reject(err);
                // console.log(data[0]);
                resolve(data[0]);
            });
        });
    }

    static async save(userinfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id,psword,name,email,grade) VALUES(?,?,?,?,?);";
            db.query( 
                query, 
                [userinfo.id, userinfo.psword, userinfo.name, userinfo.email, userinfo.grade],
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success:true});
            });
        });
    }
        

}

module.exports = userstorage;