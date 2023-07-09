const express = require("express")
const userCommentsRouter = express.Router()
const UserComments = require("../model/UserCommentSchema.jsx")


//Get User Comments

userCommentsRouter.get("/", async (req, res, next) => {
    try {
        const allComments = await UserComments.find({ comments: req.body.comments})
        return res.status(200).send(allComments)
    }
        catch (err){
            res.status(500)
            return next(err)
        }
})


userCommentsRouter.post("/", async (req, res, next) => {
    try {
      req.body.user = req.auth._id
      const newComment = new UserComments(req.body)
      const saveComment = await newComment.save()
      return res.status(201).send(saveComment)
            
    }
        catch (err){
            res.status(500)
            return next(err)
        }
})

userCommentsRouter.delete("/:commentId", async (req, res, next) => {
    try {
        const deleteComment = await UserComments.findOneAndDelete(
            {_id: req.params.commentId},
            {user: req.params._id}
            ).send(deleteComment)
            return res.status(200)(`This Item ${deletedItem} was deleted`)
    }
        catch (err){
            res.status(500)
            return next(err)
        }
})

userCommentsRouter.put("/likes/:commentsId", async (req, res, next) => {
    try {
        const updateLikes = await UserComments.findOneAndUpdate(
            {_id: req.params.commentsId, user: req.auth._id},
            {
                $addToSet: {likes: req.auth._id},
                $pull: {dislikes: req.auth._id},
            },
            {new: true}
        )
        return res.status(200).send(updateLikes)
        
    }
        catch (err){
            res.status(200)
            return next(err)
        }
})

userCommentsRouter.put("/dislike/:commentId", async (req, res, next) => {
    try {
        const updateDislike = await UserComments.findOneAndUpdate(
            {_id: req.params.commentId, user: req.auth._id},
            {
                $addToSet: {dislikes: req.auth._id},
                $pull: {likes: req.auth._id},
            },
            {new: true}
        )
        return res.status(200).send(updateDislike)
    }
        catch (err){
            res.status(500)
            return next(err)
        }
})

module.exports = userCommentsRouter

