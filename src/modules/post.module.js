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
        type:[ {
            userId: Number

        }]
       },
       likeId:{
        type: String
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
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
  

})

module.exports = mongoose.model("post", postSchema)