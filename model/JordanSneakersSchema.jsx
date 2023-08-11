const mongoose = require('mongoose')
const Schema = mongoose.Schema


const JordanSneakerSchema = new Schema ({

    slug: String ,
    name: String ,
    brand: String,
    sku: String,
    image: String ,
    category: String ,
    release_date: String ,

details: {
    retail: Number,
    releaseDate: String,
    colorway: String,
    brand: String,
    type: String,
    gender: String,
    description: String
},
    likes:[{
        type: Schema.Types.ObjectId,
        ref:  "User"
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref:  "User"
    }],
})

module.exports = mongoose.model("JordanSneaker", JordanSneakerSchema)