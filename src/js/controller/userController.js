const validators = require('./validation');
const { createTeacher, getTeacherById, createStudent } = require('../database/repositories/users');

const createTeacherController = async (body) => {
    const { value, error } = validators.validate(body, validators.teacherValidator);
    if (error) return { error };

    const { error: dbError, result } = await createTeacher(value);

    if (dbError) return { error: { status: 500, data: dbError } };
    return { result: { data: result, status: 201 } };
};

const getTeacherByIdController = async (query) => {
    const { value, error } = validators.validate(query, validators.idValidatorWithParams);
    if (error) return { error };

    const { error: dbError, result } = await getTeacherById(value);

    if (dbError) return { error: { status: 500, data: dbError } };
    return { result: { data: result, status: 201 } };
};

const createStudentController = async (body) => {
    const { value, error } = validators.validate(body, validators.studentValidator);
    if (error) return { error };

    const { error: dbError, result } = await createStudent(value);

    if (dbError) return { error: { status: 500, data: dbError } };
    return { result: { data: result, status: 201 } };
};

module.exports = { createTeacherController, getTeacherByIdController, createStudentController };