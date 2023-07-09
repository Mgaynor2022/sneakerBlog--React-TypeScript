const express = require("express")
const kobeSneakersRouter = express.Router()
const KobeSneakers = require("../model/KobeSneakerSchema.jsx")


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

module.exports = kobeSneakersRouter