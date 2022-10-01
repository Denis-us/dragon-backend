const express = require('express')
const router = express.Router()
const {basedir} = global
const {auth} = require(`${basedir}/middlewares`)
const {getFavourites, getFavouriteDragon, addFavouriteDragon, removefavouriteDragon} = require(`${basedir}/controllers/contacts`)
const { validateFavouriteDragonId, validateFavouriteDragon} = require('./validation')
const ctrlWrapper = require(`${basedir}/helpers/ctrlWrapper`)

router.get('/favourites', auth, ctrlWrapper(getFavourites))

router.get('/favourites/:favouriteId', auth, validateFavouriteDragonId, ctrlWrapper(getFavouriteDragon))

router.post('/favourites', auth, ctrlWrapper(addFavouriteDragon))

router.delete('/favourites/:favouriteId', auth, validateFavouriteDragonId, ctrlWrapper(removefavouriteDragon))

module.exports = router