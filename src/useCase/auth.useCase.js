
const User = require("../modules/user.module")

const bcrypt = require("bcrypt")

const createError = require("http-errors")

const jwt = require("../lib/jwt.lib")


const login = async (email, textplainPassword) =>{

    const user = await User.findOne({email})

    if(!user) throw createError(401, "No esta autorizado")

    const isValidPassword = await bcrypt.compare(textplainPassword, user.password)

    if(!isValidPassword) throw createError(401, "No esta autorizado")

    const token = jwt.sign({id: user._id})
    return token
}

module.exports = {login}