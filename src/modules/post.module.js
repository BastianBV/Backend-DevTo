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
        type: String,

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