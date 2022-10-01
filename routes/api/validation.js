const Joi = require('joi')

const schemaFavouriteDragon = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    wiki: Joi.link().required(),
    parameters: Joi.object().required()
})

const schemaFavouriteDragonId = Joi.object({
    favouriteDragonId: Joi.string().required()
})

const emailRegexp = /[a-z0-9]+@([a-z]+\.)+[a-z]{2,3}/

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})


const validate = async (schema, obj, res, next) => {
    try {
        await schema.validateAsync(obj)
        next()
    }
    catch (err) { 
        console.log(err)  
        res.status(400).json({status: 'error', code: 400, message: err.message })
    }
}

module.exports.validateFavouriteDragon = async (req, res, next) => {
    return await validate(schemaFavouriteDragon, req.body, res, next)
}

module.exports.validateFavouriteDragonId = async (req, res, next) => {
    return await validate(schemaFavouriteDragonId, req.params, res, next)
}

// module.exports.validateFavorite = async (req, res, next) => {
//     return await validate(schemaFavorite, req.body, res, next)
// }

module.exports.validateRegister = async (req, res, next) => {
    return await validate(registerSchema, req.body, res, next)
}

module.exports.validateLogin = async (req, res, next) => {
    return await validate(loginSchema, req.body, res, next)
}