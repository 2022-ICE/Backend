"use strict";

//promises - 유지보수 용이, 코드 읽기 쉬워짐
//; 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 효과적
const fs = require("fs").promises;

class userstorage{
    //은닉화된 메서드는 항상 맨 위로 올리기
    static #getuserinfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id); //해당 id의 배열 인덱스 파악 
        const userskeys = Object.keys(users); // == [id, psword, name]
        const userinfo = userskeys.reduce((newusers, info)=>{
            newusers[info] = users[info][idx]; //해당 id와 같은 인덱스를 가진 == 같은 사용자의 데이터
            return newusers;
        }, {});

        return userinfo;
    }

    static #getusers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newusers = fields.reduce((newusers, field)=>{
            if(users.hasOwnProperty(field)){
                newusers[field] = users[field];
            }
            return newusers;
        }, {});
        return newusers; 
    }

    //#으로 은닉화된 user변수 외부에서 사용가능하도록 반환
    //user에서 필요한 field만 불러오기 - 강의20
    static getusers(isAll, ...fields){
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getusers(data, isAll, fields);
            }) //성공시
            .catch(console.error); //실패시
    }

    //user field에서 필요한 값 하나 불러오기 - 강의 21
    //id를 입력하면 그와 관련된 pw, name...오브젝트{}로 전달해주는 
    static getuserinfo(id){
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getuserinfo(data, id);
            }) //성공시
            .catch(console.error); //실패시
    }

    static async save(userinfo){
        //getusers("id", "psword", "name", "email", "grade") == getusers(true)
        const users = await this.getusers(true);
        if(users.id.includes(userinfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userinfo.id);
        users.name.push(userinfo.name);
        users.psword.push(userinfo.psword);
        users.email.push(userinfo.email);
        users.grade.push(userinfo.grade);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success:true};
        }
        

}

module.exports = userstorage;