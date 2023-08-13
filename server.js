const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")
var { expressjwt: jwt } = require("express-jwt")

app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin: true
  }))

  // Routes add local before /api
app.use("/local/auth", require("./routes/AuthRouter.jsx"))
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use("/local/api/publicSneakers", require("./routes/PublicSneakersRouter.jsx"))
app.use("/local/api/userComment",require("./routes/UserCommentRouter.jsx"))
app.use("/local/api/popularSneakers", require("./routes/PopularSneakersRouter.jsx"))
app.use("/local/api/kobeSneakers", require("./routes/KobeSneakersRouter.jsx"))
app.use("/local/api/jordanSneakers", require("./routes/JordanSneakersRouter.jsx"))
// app.use("api/UserSneakers", require("./routes/UserSneakers.jsx"))

//Error Handling 
app.use((err,req,res,next) =>{
    console.log(err)
    return res.send({errMsg:err.message})
  })

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to database');

        app.listen(4000, (err) => {
            if (err) {
                throw new Error(err);
            }
            console.log('Server is Successfully Running, and App is listening on port ' + 4000);
        });
    })
    .catch(err => {
        console.error(err);
    });

    

