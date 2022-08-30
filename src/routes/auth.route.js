const express = require("express")

const { login } = require("../useCase/auth.useCase")

const router = express.Router()

router.post("/", async (request, response) =>{

    try{
        const {body} = request
        const token = await login(body.email, body.password)

        response.json({
            success:true,
            data: {
                token
            }
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            sucess: false,
            message: error.message
        })
    }
})
module.exports = router