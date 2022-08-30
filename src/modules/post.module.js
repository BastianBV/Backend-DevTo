const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({

    urlImage: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: {
        type: String,

    },
    reactions: {
       likes:{
        type: Number
       },
       unicorn:{
        type: Number
       },
       save:{
        type: Number
       }

    },
    comments: {
        type: String,

    },
    author: {
        type: String,
        
    },
    startDate: {
        type: Date,
        
    },
  

})

module.exports = mongoose.model("post", postSchema)