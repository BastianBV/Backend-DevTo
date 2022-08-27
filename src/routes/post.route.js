const express = require("express")
const { create } = require("../useCase/post.userCase")

const router = express.Router()


router.post("/", async (request, response) => {
  const { body } = request
  try{
    const user = await create(body)
    response.status(201)
    response.json({
      success: true,
      data: {
        user
      }
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router