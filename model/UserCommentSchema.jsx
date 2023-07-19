const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema ({
    
    username:{
        type: String
    },
    comment: String,

    timestamp: {
        type: Date,
        default: Date.now
    },
    sneakerId: {
        type: Schema.Types.ObjectId,
        ref: "KobeSneakers",
        required: true,
      },
})

module.exports = mongoose.model("Comment", CommentSchema); 