const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')

const { userRegisteer, login } = require('../controller/userController')
const listGen = require('../controller/listController')

router.post('/register', userRegisteer)
router.post('/login', login)
router.post('/create-list', listGen)
module.exports = router
