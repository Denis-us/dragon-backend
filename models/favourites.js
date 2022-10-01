const {Schema, model} = require('mongoose')

const favouritesSchema = new Schema ({
    name: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      // required: true
    },
    wiki: {
      type: String,
      // required: true
    },
    parameters: {
      type: Object,
      // required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  }, {versionKey: false})

  const Favourites = model('favourites', favouritesSchema)
  
  module.exports = Favourites