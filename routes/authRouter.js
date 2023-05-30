const express = require("express");
const auth = require("../controllers/AuthController");

const authRouter = express.Router();

authRouter.post("/signup", auth.signup);
authRouter.post("/login", auth.login);
authRouter.get("/articles", auth.getArticleList);


module.exports = authRouter;