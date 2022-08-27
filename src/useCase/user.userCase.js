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

const userPut = async(iduserUpdated,bodyuserUpdated)=>{
  const hashpassword= await bcrypt.hash(bodyuserUpdated.password, 10)

  const userUpdate = await User.findByIdAndUpdate(iduserUpdated,bodyuserUpdated,{returnDocument:"after",password: hashpassword})
  
  return userUpdate
}

module.exports = {
  createUser,
  user,
  userPut
}