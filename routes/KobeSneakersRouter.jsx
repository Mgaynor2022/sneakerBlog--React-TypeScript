const express = require("express")
const kobeSneakersRouter = express.Router()
const KobeSneakers = require("../model/KobeSneakerSchema.jsx")
const Comment = require("../model/UserCommentSchema.jsx")
const { expressjwt } = require('express-jwt');
require('dotenv').config();


//Get All
kobeSneakersRouter.get("/", async (req, res, next) =>{
    try {
        const allSneakers = await KobeSneakers.find({ topKobeSneakers: req.body.topKobeSneakers})
        return res.status(200).send(allSneakers)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

kobeSneakersRouter.post("/",
  expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
   async (req, res, next) => {
    try {
        req.body.user = req.auth._id
        const newSneaker = await KobeSneakers(req.body)
        const saveSneaker = await newSneaker.save()
        return res.status(201).send(saveSneaker)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})

kobeSneakersRouter.put("/likes/:sneakerId",
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
     async (req, res, next) => {
        try {
            const updateLikes = await KobeSneakers.findOneAndUpdate(
                {_id: req.params.sneakerId, user: req.auth._id},
                {
                    $addToSet: {upvotes: req.auth._id},
                    $pull: {downvotes: req.auth._id},
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
        
kobeSneakersRouter.put("/dislike/:sneakerId",
expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
    async (req, res, next) => {
    try {
        const updateDislike = await KobeSneakers.findOneAndUpdate(
            {_id: req.params.sneakerId, user: req.auth._id},
            {
                $addToSet: {downvotes: req.auth._id},
                $pull: {upvotes: req.auth._id},
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



module.exports = kobeSneakersRouter