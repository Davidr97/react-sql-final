import classifyColumnsNoNull from "../common/classifyColumnsNoNulls";

const validateData = (data) => {
    if(data === null){
        return false;
    }
    if(data.length === 0){
        return false;
    }
    const classifiedColumns = classifyColumnsNoNull(data);
    if(Object.keys(classifiedColumns).length < 3){
        return false;
    }
    return !Object.keys(classifiedColumns)
        .every(key => classifiedColumns[key] === 'date');
};

export default validateData;