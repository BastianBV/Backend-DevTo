const jwt = require("../lib/jwt.lib");
const Post = require("../modules/post.module");
const {validationResult} = require('express-validator');

const auth = (request, response, next) => {
    try {
        const authorization = request.headers.authorization || ""
        const token = authorization.replace("Bearer ", "")
        let user = jwt.verify(token) 
        request.headers.userId = user.id
        next()
    } catch (error) {
        response.status(401)
        response.json({
            success: false,
            error: error.message
        })
    }

}


const validarCampos = (request, response, next) =>{

    const errors = validationResult(request);
    if( !errors.isEmpty() ){
        return response.status(404).json(errors);
    }
    next();
}

const existePostId = async( id)=>{
    const existePost = await Post.findOne(id);
    console.log(existePost);
    if( existePost ){
        throw new Error(`El ${id} no existe`)
    }
}


module.exports = { 
    auth,
    validarCampos,
    existePostId
 }
