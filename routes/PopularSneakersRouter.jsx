const express = require("express")
const popularSneakersRouter = express.Router()
const PopularSneakers = require("../model/PopularSneakersSchema.jsx")
const { expressjwt } = require('express-jwt');
require('dotenv').config();

popularSneakersRouter.get("/", async (req, res, next) => {
    try {
        const topSneakers = await PopularSneakers.find({ popularSneakers: req.body.popularSneakers})
        return res.status(200).send(topSneakers)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

popularSneakersRouter.put("/likes/:sneakerId",
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
    async (req, res, next) => {
        try {
            const updateLikes = await PopularSneakers.findOneAndUpdate(
                {_id: req.params.sneakerId},
                {
                    $addToSet: {likes: req.auth._id},
                    $pull: {dislikes: req.auth._id}
                },
                {new: true}
            )
            return res.status(200).send(updateLikes)
        }
        catch (err){
            res.status(500)
            return next(err)
        }
    })

    // kobeSneakersRouter.put("/like/:sneakerId",
    // expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
    //  async (req, res, next) => {
    //     try {
    //         const updateLikes = await KobeSneakers.findOneAndUpdate(
    //             {_id: req.params.sneakerId, user: req.auth._id},
    //             {
    //                 $addToSet: {upvotes: req.auth._id},
    //                 $pull: {downvotes: req.auth._id},
    //             },
    //             {new: true}
    //             )
    //             return res.status(200).send(updateLikes)
                
    //         }
    //         catch (err){
    //             res.status(200)
    //             return next(err)
    //         }
    //     })

popularSneakersRouter.put("/dislikes/:sneakerId",
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
    async (req, res, next) => {
        try {
            const disLikes = await PopularSneakers.findOneAndUpdate(
                {_id: req.params.sneakerId},
                {
                    $addToSet: {dislikes: req.auth._id},
                    $pull: {likes: req.auth._id}
                },
                {new: true}
            )
            return res.status(200).send(disLikes)
        }
        catch (err){
            res.status(500)
            return next(err)
        }
    })


module.exports = popularSneakersRouter