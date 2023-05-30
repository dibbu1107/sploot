const User = require("../model/User");
const Article = require("../model/Article");

async function userdetail(req, res) {
    try {
        const userdata = await User.findOne({
            email: req.user
        }, ["email", "name", "age"]);

        if (!userdata) {
            return res.status(401).json({
                statusCode: 401,
                message: "unauthorized user",
                success: false,
            });
        }

        return res.status(200).json({
            statusCode: 200,
            data: userdata,
            message: "Data fetched successfully",
            success: true,
        });
    } catch (error) {
        return res.status(400).json({
            statusCode: 400,
            error: `${error}`,
            success: false,
        });
    }
}

async function addArticle(req, res) {
    try {
        const article = {
            title: req.body.title,
            description: req.body.description,
            userId: req.params.userId,
        };
        const getArticle = await Article.findOne(article);
        if (getArticle) {
            return res.status(403).json({
                statusCode: 403,
                message: "Article already exists",
            });
        }
        let toSave = new Article(article)
        await toSave.save();
        return res.status(200).json({
            statusCode: 200,
            message: "article added successfully",
        });
    } catch (error) {
        return res.status(400).json({
            statusCode: 400,
            error: `${error}`,
            success: false,
        });
    }
}

async function updateProfile(req, res) {
    try {
        await User.updateOne({ _id: req.params.userId }, {
            $set: {
                name: req.body.name,
                age: req.body.age,
            }
        });
        return res.status(200).json({
            statusCode: 200,
            message: "data updated successfully",
        });
    } catch (error) {
        return res.status(400).json({
            error: `${error}`,
            success: false,
            statusCode: 400,
        });
    }
}



module.exports = {
    userdetail,
    addArticle,
    updateProfile
}