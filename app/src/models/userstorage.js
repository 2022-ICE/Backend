"use strict";

class userstorage{
    //클래스 내에 변수 선언할 떄는 const같은 선언자 필요없음 그렇지만 
    //다른 곳에서 이 클래스내 변수를 불러오기 위해 static 선언은 해줘야
    //외부에서 내부 데이터에 접속할 수 없도록 == 은닉처리 == private 변수 == #
    static #users = {
        id: ["test1", "test2", "test3"],
        psword : ["q1", "q12", "q123"],
        name : ["테스트1", "테스트2", "테스트3"],
    };

    //#으로 은닉화된 user변수 외부에서 사용가능하도록 반환
    //user에서 필요한 field만 불러오기 - 강의20
    static getusers(...fields){
        const users = this.#users;
        const newusers = fields.reduce((newusers, field)=>{
            if(users.hasOwnProperty(field)){
                newusers[field] = users[field];
            }
            return newusers;
        }, {});
        return newusers;
    }

    //user field에서 필요한 값 하나 불러오기 - 강의 21
    //id를 입력하면 그와 관련된 pw, name...오브젝트{}로 전달해주는 
    static getuserinfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id); //해당 id의 배열 인덱스 파악 
        const userskeys = Object.keys(users); // == [id, psword, name]
        const userinfo = userskeys.reduce((newusers, info)=>{
            newusers[info] = users[info][idx]; //해당 id와 같은 인덱스를 가진 == 같은 사용자의 데이터
            return newusers;
        }, {});

        return userinfo;
    }

    static save(userinfo){
        const users = this.#users;
        users.id.push(userinfo.id);
        users.name.push(userinfo.name);
        users.psword.push(userinfo.psword);
        return {success:true};
    }

}

module.exports = userstorage;