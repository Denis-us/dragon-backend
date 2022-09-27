const express = require('express')
const router = express.Router()
const {basedir} = global
const {auth} = require(`${basedir}/middlewares`)
const {register, login, logout, currentUser} = require(`${basedir}/controllers/auth`)
const {validateRegister, validateLogin} = require('./validation')
const ctrlWrapper = require(`${basedir}/helpers/ctrlWrapper`)

router.post('/register', validateRegister, ctrlWrapper(register))

router.post('/login', validateLogin, ctrlWrapper(login))

router.get('/logout', auth, ctrlWrapper(logout))

router.get('/current', auth, ctrlWrapper(currentUser))

// router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(setAvatar))

module.exports = router