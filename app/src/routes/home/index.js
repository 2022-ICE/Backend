"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

//우리는 home이 아니고 main으로 선언함
router.get('/', ctrl.output.main);

router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);

module.exports = router; //외부에서 사용할 수 있도록 export