const User = require("../modules/user.module")
const bcrypt = require("bcrypt")

// Crear un usuario
const createUser = async (userData) => {
   const hashpassword= await bcrypt.hash(userData.password, 10)
  const user = User.create({...userData, password: hashpassword })
  return user
}


module.exports = {
  createUser
}