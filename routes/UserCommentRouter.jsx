const express = require("express")
const userCommentsRouter = express.Router()
const UserComments = require("../model/UserCommentSchema.jsx")
const User = require("../model/UserSchema.jsx")
const { expressjwt } = require('express-jwt');
require('dotenv').config();


//Get All Comments For A Kobe Sneaker

userCommentsRouter.get("/",
expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
 async (req, res, next) =>{
    
    try {
        const allComments = await UserComments.find({ comments: req.body.comments})
        return res.status(200).send(allComments)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

userCommentsRouter.get("/:sneakerId",
expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
 async (req, res, next) => {
    try {
        const allKobeComments = await UserComments.find({ sneakerId: req.params.sneakerId})
        return res.status(200).send(allKobeComments)
    }
        catch (err){
            res.status(500)
            return next(err)
        }
})

// userCommentsRouter.get("/", async (req, res, next) => {
//     try {
//         const allComments = await UserComments.find({ comments: req.body.comments})
//         return res.status(200).send(allComments)
//     }
//         catch (err){
//             res.status(500)
//             return next(err)
//         }
// })



userCommentsRouter.post('/:sneakerId',
expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
 async (req, res, next) => {
      try {
        const comment = {
            comment: req.body.comment,
            sneakerId: req.params.sneakerId,
            user: req.auth._id
        }
        console.log(comment)
        const newComment = new UserComments(comment)
        const savedComment = await newComment.save();
        console.log("Saved Comment", savedComment)
        return res.status(201).send(savedComment)
      }
        catch (err){
            res.status(500)
            return next(err)
        }
    });


    
    userCommentsRouter.put("/likes/:commentsId",
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
     async (req, res, next) => {
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
        
        userCommentsRouter.put("/dislike/:commentId",
        expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
         async (req, res, next) => {
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
            
            userCommentsRouter.delete("/:commentId",
            expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
             async (req, res, next) => {
                try {
                    const deleteComment = await UserComments.findOneAndDelete(
                        {_id: req.params.commentId},    
                        {user: req.params._id}
                        )
                        return res.status(200).send(`This Item ${deleteComment} was deleted`)
                }
                    catch (err){
                        res.status(500)
                        return next(err)
                    }
            })
            module.exports = userCommentsRouter
            
            