const express = require("express")
const cors = require("cors")


const routerUser = require("./routes/user.route")
const routerPost = require("./routes/post.route")

const app = express()

app.use(express.json())


app.use("/users", routerUser)
//app.use("/user", routerUser)
app.use("/post", routerPost)


module.exports= app