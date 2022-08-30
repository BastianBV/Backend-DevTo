const Post = require("../modules/post.module");

const create = (postData) => {
    const post = Post.create(postData)
    return post
}

const getAllPosts = async(request,response) =>{
    const posts = await Post.find();
    response.json({
        posts
    });
};

const getSinglePost= async(request,response) =>{
    const {id} = request.params;

   console.log("id", id)


    const post = await Post.findById(id);
    response.json({
        post
    });
};

const updatePost = async(request, response)=>{
    
    const{id} = request.params;

    const{ author, ...resto} = request.body;

    const post2Modify = await Post.findByIdAndUpdate(id,resto, {returnDocument:"after"});

    response.json({
        msg: 'UPDATING THE POST',
        post2Modify
    })
} 

const updateReactions = async (id) =>{
    const post = await Post.findById(id)
    post.reactions.likes += 1
    const postReactions = await Post.findByIdAndUpdate(id, post)
    return postReactions
}


const updateLike = async (id) =>{
    const post = await Post.findById(id)
    post.reactions.likes -= 1
    const delLike = await Post.findByIdAndUpdate(id, post)
    return delLike
}



const eliminate = (postDelete) =>{


    const post = Post.delete(postData)

    const postdelete = Post.findByIdAndDelete(postDelete)

    return post
}
module.exports = {
    create,
    updateReactions,
    updateLike,
    create,
    getAllPosts,
    getSinglePost,
    updatePost,
    eliminate
  }