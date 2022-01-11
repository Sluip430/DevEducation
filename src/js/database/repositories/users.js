const pgClient = require('../database');

const createTeacher = async (body) => {
    const {role, first_name, last_name, age, universitie_id} = body;
    try {
        const result = await pgClient.query(`INSERT INTO users (role, first_name, last_name, age, universitie_id) VALUES ('${role}', '${first_name}', '${last_name}', ${age}, ${universitie_id});`);
        return { result: result.rows[0] };
    } catch (e) {
        return { error: e.message }
    }
};

const getTeacherById = async (query) => {
    const {id, page, perPage, name} = query;
    try {
        const result = await pgClient.query(`SELECT * FROM users WHERE id = ${id} AND first_name ILIKE '%${name}%' OR last_name ILIKE '%${name}%' ORDER BY id OFFSET ${(page - 1) * perPage} LIMIT ${perPage};`);
        return { result: result.rows };
    } catch (e) {
        return { error: e.message }
    }
};

const createStudent = async (body) => {
    const {role, first_name, last_name, age, universitie_id} = body;
    try {
        const result = await pgClient.query(`INSERT INTO users (role, first_name, last_name, age, universitie_id) VALUES ('${role}', '${first_name}', '${last_name}', ${age}, ${universitie_id});`);
        return { result: result.rows[0] };
    } catch (e) {
        return { error: e.message }
    }
};

module.exports = { createTeacher, getTeacherById, createStudent };