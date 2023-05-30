const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Article = require("../model/Article");

async function signup(req, res) {
    try {
        const { name, email, age, password } = req.body;
        const userdetail = await User.findOne({ email: email });
        if (userdetail) {
            res.status(403).json({
                statusCode: 403,
                message: "user already exists",
            });
            return;
        }
        const hashedPwd = await bcrypt.hash(password, 10);
        const user = new User({ name, email, age, password: hashedPwd });
        await user.save();
        return res.status(200).json({
            statusCode: 200,
            message: "user signup successfully",
        });
    } catch (error) {
        return res.status(400).json({
            statusCode: 400,
            error: `${error}`,
            success: false,
        });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const userdetail = await User.findOne({ email: email });
        if (userdetail) {
            const match = bcrypt.compare(password, userdetail.password);
            if (!match) {
                res.status(400).json({
                    statusCode: 400,
                    message: "invalid username password",
                    success: false,
                });
                return;
            }

            const token = jwt.sign({ email: email }, "seceretKey", { expiresIn: '1h' });

            res.status(200).json({
                statusCode: 200,
                message: "logged in successfully",
                token: token,
                success: true,
            });
            return;
        } else {
            res.status(400).json({
                statusCode: 400,
                msg: "invalid username password",
                success: false,
            });
            return;
        }
    } catch (error) {
        res.status(400).json({
            statusCode: 400,
            error: `${error}`,
            success: false,
        });
    }
}

async function getArticleList(req, res) {
    try {
        const getData = await Article.find();
        console.log(getData, "<<<")
        return res.status(200).json({
            statusCode: 200,
            data: getData,
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

module.exports = {
    signup,
    login,
    getArticleList,
};