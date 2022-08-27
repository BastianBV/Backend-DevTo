const Post = require("../modules/post.module")

const create = (postData) => {

    const post = Post.create(postData)
    return post
}

module.exports = {
    create
  }