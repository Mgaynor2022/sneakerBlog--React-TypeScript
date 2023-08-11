const express = require("express")
const jordanSneakersRouter = express.Router()
const JordanSneakers = require("../model/JordanSneakersSchema.jsx")
const { expressjwt } = require('express-jwt');
require('dotenv').config();



//Get All
jordanSneakersRouter.get("/", async (req, res, next) =>{
    try {
        const allSneakers = await JordanSneakers.find({ topJordanSneakers: req.body.topJordanSneakers})
        return res.status(200).send(allSneakers)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

jordanSneakersRouter.post("/",
  expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
   async (req, res, next) => {
    try {
        req.body.user = req.auth._id
        const newSneaker = await JordanSneakers(req.body)
        const saveSneaker = await newSneaker.save()
        return res.status(201).send(saveSneaker)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})

jordanSneakersRouter.put("/like/:sneakerId",
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
     async (req, res, next) => {
        try {
            const updateLikes = await JordanSneakers.findOneAndUpdate(
                {_id: req.params.sneakerId},
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
        
jordanSneakersRouter.put("/dislike/:sneakerId",
expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
    async (req, res, next) => {
    try {
        const updateDislike = await JordanSneakers.findOneAndUpdate(
            {_id: req.params.sneakerId},
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



module.exports = jordanSneakersRouter