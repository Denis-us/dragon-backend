const {basedir} = global
const Favourites = require(`${basedir}/models/contacts`)

const removefavouriteDragon = async (req, res) => {
      const favourite = await Favourites.findByIdAndRemove(req.params.favouriteId)
      if(favourite) {
        return res.status(200).json({ status: 'success', code: 200, message: 'Favourite dragon deleted from list', data: {favourite}})
      }
      return res.status(404).json({ status: 'error', code: 404, message: 'Not found'})
  }

  module.exports = removefavouriteDragon