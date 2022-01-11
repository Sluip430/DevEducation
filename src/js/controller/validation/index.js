exports.univerNameValidator = require('./name.validator').univerNameValidator;
exports.idValidator = require('./id.validator').idValidator;
exports.universitiesListValidator = require('./universities.list.validator').universitiesListValidator;
exports.teacherValidator = require('./teacher.validator').teacherValidator;
exports.idValidatorWithParams = require('./users.validator').idValidatorWithParams;
exports.courseCreateValidator = require('./course.validator').courseCreateValidator;
exports.studentValidator = require('./teacher.validator').studentValidator;


exports.validate = (data, schema) => {
  const result = schema.validate(data, { abortEarly: false });

  if (result.error) {
    const error = { status: 400, data: result.error.message };
    return { error };
  }
  return { value: result.value };
};