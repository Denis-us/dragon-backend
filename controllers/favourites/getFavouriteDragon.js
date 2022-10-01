const {basedir} = global
const Favourites = require(`${basedir}/models/favourites`)

const getFavouriteDragon = async (req, res) => {
      const favourite = await Favourites.findById(req.params.favouriteId)
      if(favourite) {
        return res.status(200).json({ status: 'success', code: 200, data: {favourite}})
      }
      return res.status(404).json({ status: 'error', code: 404, message: 'Not found'})
  }

  module.exports = getFavouriteDragon