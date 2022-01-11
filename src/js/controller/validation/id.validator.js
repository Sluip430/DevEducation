const Joi = require('joi');

exports.idValidator = Joi.object().keys({
  id: Joi.number().integer().positive().required(),
});