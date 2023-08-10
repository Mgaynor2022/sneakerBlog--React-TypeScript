const express = require("express")
const publicSneakersRouter = express.Router()
const PublicSneakers = require("../model/PublicSchema.jsx")
const { expressjwt } = require('express-jwt');


//Get All
publicSneakersRouter.get("/", async (req, res, next) =>{
    try {
        const allSneakers = await PublicSneakers.find({ allSneakers: req.body.allSneakers})
        return res.status(200).send(allSneakers)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

// Get by Brand
publicSneakersRouter.get("/search/brand", async (req, res, next) => {
    try {
        const searchFilter = await PublicSneakers.find({name: req.query.name})
        return res.status(200).send(searchFilter)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

// Updating Sneaker Likes 
publicSneakersRouter.put("/likes/:sneakerId",
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
     async (req, res, next) => {
    try {
        const updatedLikes = await PublicSneakers.findOneAndUpdate(
            {_id: req.params.sneakerId},
            {
                $addToSet: {likes: req.auth._id},
                $pull: {dislikes: req.auth._id}
            },
            {new: true}
        )
        return res.status(201).send(updatedLikes)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})

// DisLiking Sneakers 
publicSneakersRouter.put("/dislikes/:sneakerId",
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
    async (req, res, next) => {
    try {
        const result = await PublicSneakers.findByIdAndUpdate(
            {_id: req.params.sneakerId},
            {
                $addToSet: {dislikes: req.auth._id},
                $pull: {likes: req.auth._id},
            },
            {new: true}
        )
        return res.status(201).send(result)

    } catch (err){
        res.status(500)
        return next(err)
    }


})


module.exports = publicSneakersRouter