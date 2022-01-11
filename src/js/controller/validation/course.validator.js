const Joi = require('joi');

exports.courseCreateValidator = Joi.object().keys({
  name: Joi.string().min(0).required(),
  universitie_id: Joi.number().integer().positive().required(),
  teacher_id: Joi.number().integer().positive().required()
});