const validators = require('./validation');
const { getData, getFuctTime } = require('../database/repositories/users');

const getDataController = async (query) => {
    const { value, error } = validators.validate(query, validators.idValidator);
    if (error) return { error };

    const { error: dbError, result } = await getData(value);

    if (dbError) return { error: { status: 500, data: dbError } };
    return { result: { data: result, status: 200 } };
};

const getFuctTimeController = async (query) => {
    const { value, error } = validators.validate(query, validators.fuctValidator);
    if (error) return { error };

    const { error: timeError, result } = await getFuctTime(value);

    if (timeError) return { error: { status: 500, data: timeError } };
    return { result: { data: result, status: 200 } };
};

module.exports = { getDataController, getFuctTimeController };