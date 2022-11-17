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

}

module.exports = userstorage;