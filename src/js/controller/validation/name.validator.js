const Joi = require('joi');

exports.univerNameValidator = Joi.object().keys({
  name: Joi.string().min(0).required(),
});