const express = require("express")
const cors = require("cors")


const routerUser = require("./routes/user.route")

const app = express()

app.use(express.json())

app.use("/users", routerUser)

module.exports= app