const mongoose = require('mongoose')
const Schema = mongoose.Schema


const KobeSneakerSchema = new Schema ({

id: String,
sku: String,
brand: String,
name: String,
colorway: String,
gender: String,
silhouette: String,
releaseYear: String,
releaseDate: String,
retailPrice: Number,
estimatedMarketValue: Number,
story: String,

image:{
    original: String,
    small: String,
    thumbnail: String
},

links: {
    stockx: String,
    goat: String,
    flightClub: String,
    stadiumGoods: String
},
// user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
  upvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  downvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

})

module.exports = mongoose.model("KobeSneakers", KobeSneakerSchema)