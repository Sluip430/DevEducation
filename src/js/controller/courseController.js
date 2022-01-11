const validators = require('./validation');
const { createCourse, getCourseById, deleteCourse } = require('../database/repositories/courses');

const createCourseController = async (body) => {
    const { value, error } = validators.validate(body, validators.courseCreateValidator);
    if (error) return { error };

    const { error: dbError, result } = await createCourse(value);

    if (dbError) return { error: { status: 500, data: dbError } };
    return { result: { data: result, status: 201 } };
};

const getCourseByIdController = async (query) => {
    const { value, error } = validators.validate(query, validators.idValidatorWithParams);
    if (error) return { error };

    const { error: dbError, result } = await getCourseById(value);

    if (dbError) return { error: { status: 500, data: dbError } };
    return { result: { data: result, status: 201 } };
};

const deleteCourseController = async (body) => {
    const { value, error } = validators.validate(body, validators.idValidator);
    if (error) return { error };

    const { error: dbError, result } = await deleteCourse(value);

    if (dbError) return { error: { status: 500, data: dbError } };
    return { result: { data: result, status: 200 } };
};

module.exports = { createCourseController, getCourseByIdController, deleteCourseController };