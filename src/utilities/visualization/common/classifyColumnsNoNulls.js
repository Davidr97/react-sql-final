import classifyColumns from "./classifyColumns";

const classifyColumnsNoNull = (data) => {
    let classifiedColumns = classifyColumns(data);
    return Object.keys(classifiedColumns)
        .filter(key => classifiedColumns[key] !== 'null')
        .reduce((obj,key) => ({
            ...obj,
            [key]:classifiedColumns[key]
        }),{});
};

export default classifyColumnsNoNull;