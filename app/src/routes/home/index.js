"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

router.get('/', ctrl.main);

router.get('/login', ctrl.login);

module.exports = router; //외부에서 사용할 수 있도록 export