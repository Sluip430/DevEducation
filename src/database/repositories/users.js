const pgClient = require('../database');

const getData = async (query) => {
    const {id} = query;
    const myError = new Error("Result cant be Empty");
    try {
        const result = await pgClient.query(`SELECT * FROM users WHERE id = ${id}`);
        if (result.rowCount === 0) throw (myError)
        return { result: "Create sucsesful!" };
    } catch (e) {
        return { error: e.message }
    }
};

const getFuctTime = async (query) => {
    const {number, type} = query;
    console.log(typeof(type), type);
    let result;
    if (type === "recursion") {
        result = recursionTime(number)
    };
    if (type === "cycle") {
        result = cycleTime(number)
    };
    console.log(result);
    return { result : result };
};

const recursionTime = (number) => {
    console.log("im here");
    let time = performance.now();
    let result = recursionCount(number);
    time = performance.now() - time;
    return {time : time , result : result}
}

const recursionCount = (number) =>{
    return (number != 1) ? number * recursionCount(number - 1) : 1;
}

const cycleTime = (number) => {
    let time = performance.now();
    let result = 1;
    for (let i = 1; i <= number; i++){
        result *= i;
    }
    time = performance.now() - time;
    return {time : time , result : result}
}

module.exports = { getData, getFuctTime };