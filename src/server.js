const express = require("express")
const cors = require("cors")


const routerAuth = require("./routes/auth.route")
const routerUser = require("./routes/user.route")
const routerPost = require("./routes/post.route")

const app = express()

app.use(cors())
app.use(express.json())


app.use("/users", routerUser)
//app.use("/user", routerUser)
app.use("/post", routerPost)
app.use("/auth", routerAuth)


module.exports= app