const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PopularSneakersSchema = new Schema ({
    slug: String ,
    name: String ,
    brand: String,
    sku: String,
    image: String ,
    category: String ,
    release_date: String ,
    description: String,
    price: String,
    
    likes:[{
        type: Schema.Types.ObjectId,
        ref:  "User"
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref:  "User"
    }],
    timestamp: {
        type: Date,
        default: Date.now,
      },
     
})

module.exports = mongoose.model("PopularSneakers", PopularSneakersSchema)