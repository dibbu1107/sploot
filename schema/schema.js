const Joi = require("joi");

const Schema = {
    "/api/signup": Joi.object().keys({
        name: Joi.string().required(),
        age: Joi.number().required(),
        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: {
                    allow: true,
                },
            })
            .required(),
        password: Joi.string().required(),
    }),

    "/api/login": Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),

    "/api/users/:userId/articles": Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
    }),

    "api/users/:userId": Joi.object().keys({
        name: Joi.string().optional(),
        description: Joi.string().optional(),
    }),
};

module.exports = Schema;