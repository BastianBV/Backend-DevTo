require('dotenv').config()

const mongoose = require("mongoose")
const app = require("./src/server")




const{
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
} = process.env

console.log("DB_USERNAME,",DB_USERNAME)
console.log("DB_PASSWORD,",DB_PASSWORD)
console.log("DB_HOST,    ",DB_HOST)
console.log("DB_NAME,    ",DB_NAME)


const url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}${DB_NAME}`

mongoose.connect(url)
.then(()=>{

    console.log("Base de datos conectada")
    app.listen("8080", ()=>{

        console.log("servidor Escuchando")
    })
})
.catch((error)=>{

    console.log(error, "error")
})

 