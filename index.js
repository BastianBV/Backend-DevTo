require('dotenv').config()

const mongoose = require("mongoose")
const app = require("./src/server")

const{
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
} = process.env




const{
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
} = process.env



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

 