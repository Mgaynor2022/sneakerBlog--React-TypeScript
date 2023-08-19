const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema ({
    comment: {
        type: String
    },

    timestamp: {
        type: Date,
        default: Date.now
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, 
    postBy :{
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,

    },
    sneakerId: {
        type: Schema.Types.ObjectId,
        ref: "KobeSneakers",
        required: true,
      },
      popularSneakerId:{
        type: Schema.Types.ObjectId,
        ref: "PopularSneakers"
      }
})

module.exports = mongoose.model("Comment", CommentSchema); 