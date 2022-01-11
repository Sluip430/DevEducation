const Joi = require('joi');

exports.teacherValidator = Joi.object().keys({
    role : Joi.string().valid("teacher").required(),
    first_name : Joi.string().min(2).required(),
    last_name : Joi.string().min(2).required(),
    age : Joi.number().positive().integer().required(),
    universitie_id: Joi.number().positive().integer().required()
});

exports.studentValidator = Joi.object().keys({
    role : Joi.string().valid("student").required(),
    first_name : Joi.string().min(2).required(),
    last_name : Joi.string().min(2).required(),
    age : Joi.number().positive().integer().required(),
    universitie_id: Joi.number().positive().integer().required()
});