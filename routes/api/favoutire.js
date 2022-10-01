const express = require('express')
const router = express.Router()
const {basedir} = global
const {auth} = require(`${basedir}/middlewares`)
const {getFavourites, getFavouriteDragon, addFavouriteDragon, removefavouriteDragon} = require(`${basedir}/controllers/contacts`)
const { validateFavouriteDragonId, validateFavouriteDragon} = require('./validation')
const ctrlWrapper = require(`${basedir}/helpers/ctrlWrapper`)

router.get('/favourites', auth, ctrlWrapper(getFavourites))

router.get('/favourite/:favouriteId', auth, validateFavouriteDragonId, ctrlWrapper(getFavouriteDragon))

router.post('/favourite', auth, validateFavouriteDragon, ctrlWrapper(addFavouriteDragon))

router.delete('/favourite/:favouriteId', auth, validateFavouriteDragonId, ctrlWrapper(removefavouriteDragon))

module.exports = router