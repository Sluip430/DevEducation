const Joi = require('joi');

exports.idValidatorWithParams = Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    page: Joi.number().positive().integer().min(1).default(1),
    perPage: Joi.number().positive().integer().min(1).default(5),
    name: Joi.string().default('')
});