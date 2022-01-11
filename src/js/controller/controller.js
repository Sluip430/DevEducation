const validators = require('./validation');
const { createUniver, getUniver, getUniverList } = require('../database/repositories/universities');

const createUniversitie = async (body) => {
    const { value, error } = validators.validate(body, validators.univerNameValidator);
    if (error) return { error };

    const { error: dbError, result } = await createUniver(value.name);

    if (dbError) return { error: { status: 500, data: dbError } };
    return { result: { data: result, status: 201 } };
};

const getUniversitie = async (query) => {
    const { value, error } = validators.validate(query, validators.idValidator);
    if (error) return { error };

    const { error: dbError, result } = await getUniver(value.id);

    if (dbError) return { error: { status: 500, data: dbError } };
    return { result: { data: result, status: 200 } };
};

const getUniversitiesList = async (query) => {
    const { value, error } = validators.validate(query, validators.universitiesListValidator);
    if (error) return { error };

    const { error: dbError, result } = await getUniverList(value);

    if (dbError) return { error: { status: 500, data: dbError } };
    return { result: { data: result, status: 200 } };
};

module.exports = { createUniversitie, getUniversitie, getUniversitiesList };