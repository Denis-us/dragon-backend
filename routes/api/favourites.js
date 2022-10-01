const express = require('express')
const router = express.Router()
const {basedir} = global
const {auth} = require(`${basedir}/middlewares`)
const {getFavourites, getFavouriteDragon, addFavouriteDragon, removefavouriteDragon} = require(`${basedir}/controllers/favourites`)
const { validateFavouriteDragonId, validateFavouriteDragon} = require('./validation')
const ctrlWrapper = require(`${basedir}/helpers/ctrlWrapper`)

router.get('/', auth, ctrlWrapper(getFavourites))

router.get('/:favouriteId', auth, validateFavouriteDragonId, ctrlWrapper(getFavouriteDragon))

router.post('/', auth, validateFavouriteDragon, ctrlWrapper(addFavouriteDragon))

router.delete('/:favouriteId', auth, validateFavouriteDragonId, ctrlWrapper(removefavouriteDragon))

module.exports = router