const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
    userId: String,
    title: String,
    description: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;