const pgClient = require('../database');

const createCourse = async (body) => {
    const {name, universitie_id, teacher_id} = body;
    try {
        const result = await pgClient.query(`INSERT INTO courses (name, universitie_id, teacher_id ) VALUES ('${name}', ${universitie_id}, ${teacher_id});`);
        return { result: result.rows[0] };
    } catch (e) {
        return { error: e.message }
    }
};

const getCourseById = async (query) => {
    const { page, perPage, id:universitie_id, name} = query;
    try {
        let pgQuery = `SELECT * FROM courses WHERE universitie_id = ${universitie_id}`;

        if (name) pgQuery += `AND name ILIKE '%${name}%'`;
        pgQuery += `ORDER BY id OFFSET ${(page - 1) * perPage} LIMIT ${perPage};`;

        const result = await pgClient.query(pgQuery);
        return { result: result.rows };
    } catch (error) {
        return { error: e.message }
    }
};

const deleteCourse = async (body) => {
    const { id } = body;
    try {
        const result = await pgClient.query(`DELETE FROM courses WHERE id = ${id}`);
        return { result: result.rows[0] };
    } catch (error) {
        return { error: e.message }
    }
};

module.exports = { createCourse, getCourseById, deleteCourse };