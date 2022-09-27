const express = require("express");

const {check} = require('express-validator');

const {
  create,
  getAllPosts,
  getSinglePost,
  updatePost,
  eliminate,
} = require("../useCase/post.userCase");
const { updateReactions,  updateLike} = require("../useCase/post.userCase");
const {
  auth,
  validarCampos,
  existePostId
} = require("../middlewares/auth.middleware");
const router = express.Router();


router.post("/", async (request, response) => {
  const { body } = request;
  try {
    const user = await create(body);
    response.status(201);
    response.json({
      success: true,
      data: {
        user,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});
// Reactions (LIKES, UNICORN, SAVE) -- BASTIAN
router.patch("/:id/likes",auth, async (request, response) => {
  const { params, headers } = request;
  try {
    const updateLikes = await updateReactions(params.id, headers.userId);
    response.status(201);
    response.json({
      success: true,
      data: {
        updateLikes,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.patch("/:id/removelikes", async (request, response) => {
  const { params } = request;
  try {
    const updateLikes = await updateLike(params.id);
    response.status(201);
    response.json({
      success: true,
      data: {
        updateLikes,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }

});
// Reactions (LIKES, UNICORN, SAVE) -- BASTIAN 
router.patch("/:id/likes", async (request, response) =>{

  const { params } = request;
  try {
    const user = await eliminate(params.id);
    response.status(201);
    response.json({
      success: true,
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/", getAllPosts);

router.get("/:id",[
  check('id','No es un ID válido').isMongoId(),
  check('id').custom(existePostId),
  validarCampos], getSinglePost);

router.post("/:id",[
  check('id','No es un ID válido').isMongoId(),
  check('id').custom(existePostId),
  validarCampos
],updatePost);

router.delete("/:id", async (request, response) => {
  const { params } = request
  try{
    const user = await eliminate(params.id)
    response.status(201)
    response.json({
      success: true
     
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})
router.get("/", getAllPosts);

router.get("/:id", getSinglePost);


router.patch("/:id", auth, updatePost);


module.exports = router;
