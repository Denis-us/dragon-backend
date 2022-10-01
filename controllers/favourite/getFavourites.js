const {basedir} = global
const Favourites = require(`${basedir}/models/favourites`)

const getFavourites = async (req, res) => {
      const {id: owner} = req.user
      const favourites = await Favourites.find({owner})
      res.json({ status: 'success', code: 200, data: {favourites}})
}

  module.exports = getFavourites