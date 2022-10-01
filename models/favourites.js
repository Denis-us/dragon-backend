const {Schema, model} = require('mongoose')

const favouritesSchema = new Schema ({
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    wiki: {
      type: String,
    },
    parameters: {
      type: Object,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  }, {versionKey: false})

  const Favourites = model('favourites', favouritesSchema)
  
  module.exports = Favourites