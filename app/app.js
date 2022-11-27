"use strict";

// 모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //json body 읽을 수 있도록
const dotenv = require("dotenv");
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);
app.use(express.static(`${__dirname}/src/public`)); //정적경로==app/src/public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); //url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

//와 이거 app.use코드 순서가 바뀌면 안 되네..? 바디파서가 홈 밑에 있었더니 안 되는게 위에 쓰니까 됨 -- 이유 찾기!
app.use("/", home);  // use : 미들웨어 등록해주는 메서드
// app.use(express.json);

module.exports = app;