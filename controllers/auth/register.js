const {basedir} = global
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')
const User = require(`${basedir}/models/user`)
const {SECRET_KEY} = process.env

const register = async (req, res) => {
    const {email, password} = req.body
    const mail = await User.findOne({email})
    if(mail) {
        return res.status(409).json({ status: 'error', code: 409, message: `User with ${email} is already exist!`})
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const payload = {
        id: uuidv4()
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"})
    const user = await User.create({...req.body, password: hashPassword, token})
    res.json({
        token,
        user: {
            name: user.name,
            email: user.email
        }
    })
}

module.exports = register