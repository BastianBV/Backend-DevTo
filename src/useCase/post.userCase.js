const Post = require("../modules/post.module")

const create = (postData) => {

    const post = Post.create(postData)
    return post
}
const updateReactions = async (id) =>{
    const post = await Post.findById(id)
    post.reactions.likes += 1
    const postReactions = await Post.findByIdAndUpdate(id, post)
    return postReactions
}
module.exports = {
    create,
    updateReactions
  }