const {basedir} = global
const Favourites = require(`${basedir}/models/favourites`)

const addFavouriteDragon = async (req, res) => {
    const {id: owner} = req.user
    const favourite = await Favourites.create({...req.body, owner})
    res.status(201).json({ status: 'success', code: 201, data: {favourite}})
  }

  module.exports = addFavouriteDragon