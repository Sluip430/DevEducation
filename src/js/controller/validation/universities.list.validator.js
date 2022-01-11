const Joi = require('joi');

exports.universitiesListValidator = Joi.object().keys({
  page: Joi.number().positive().integer().min(1).default(1),
  perPage: Joi.number().positive().integer().min(1).default(5),
  name: Joi.string().default('')
});