const express = require("express");
const user = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/userdetails", user.userdetail);
userRouter.post("/:userId/articles", user.addArticle);
userRouter.put("/:userId", user.updateProfile);


module.exports = userRouter;