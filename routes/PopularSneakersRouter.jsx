const express = require("express")
const popularSneakersRouter = express.Router()
const PopularSneakers = require("../model/PopularSneakersSchema.jsx")

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

module.exports = popularSneakersRouter