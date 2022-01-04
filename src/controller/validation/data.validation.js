const Joi = require('joi');

exports.idValidator = Joi.object().keys({
    id: Joi.number().integer().positive().required()
});

exports.fuctValidator = Joi.object().keys({
    number: Joi.number().integer().positive().required(),
    type: Joi.string().min(3).required()
});