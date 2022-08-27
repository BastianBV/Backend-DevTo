const User = require("../modules/user.module")
const bcrypt = require("bcrypt")

// Crear un usuario
const createUser = async (userData) => {
   const hashpassword= await bcrypt.hash(userData.password, 10)
  const user = User.create({...userData, password: hashpassword })
  return user
}

const user = async(userId) =>{
    
  const userFound = await User.findById(userId)
  return userFound
}

const userGeneral = async(user)=>{
  const users = await User.find(user)
  return users
}

const userPut = async(iduserUpdated,bodyuserUpdated)=>{
  const hashpassword= await bcrypt.hash(bodyuserUpdated.password, 10)

  // const userUpdate = await User.findByIdAndUpdate(iduserUpdated,bodyuserUpdated,{returnDocument:"after",password: hashpassword})
  const userUpdate = await User.findByIdAndUpdate(iduserUpdated,{...bodyuserUpdated, password: hashpassword},{returnDocument:"after"})

  return userUpdate
}

const userDelete = async(iduserDelete)=>{

  const userDel = await User.findByIdAndDelete(iduserDelete)

  return userDel
}

module.exports = {
  createUser,
  user,
  userPut,
  userGeneral,
  userDelete
}