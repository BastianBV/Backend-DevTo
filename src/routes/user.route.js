const express = require("express")
const { createUser } = require("../useCase/user.userCase")
const {user} = require("../useCase/user.userCase")
const {userPut} = require("../useCase/user.userCase")

const router = express.Router()


router.post("/", async (request, response) => {
  const { body } = request
  try{
    const user = await createUser(body)
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

router.get("/:id", async (request, response) => {
  const { params } = request
  try{
    const userFind = await user(params.id)
    // console.log(userFind)
    response.status(201)
    response.json({
      success: true,
      data: {
        userFind
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

router.put("/:id", async (request, response) => {
  const { params } = request
  const {body} =request
  try{
    const userUpdate = await userPut(params.id,body)
    // console.log(userFind)
    console.log(userUpdate)
    response.status(201)
    response.json({
      success: true,
      data: {
        userUpdate
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