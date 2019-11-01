import classifyColumnsNoNull from "../common/classifyColumnsNoNulls";

const validateData = (data) => {
    if(data === null){
        return false;
    }
    if(data.length === 0){
        return false;
    }
    const classifiedColumns = classifyColumnsNoNull(data);
    const keys = Object.keys(classifiedColumns);
    if(keys.length < 3){
        return false;
    }
    if(keys.every(key => classifiedColumns[key] !== 'numeric')){
        return false;
    }
    if(keys.filter(key => classifiedColumns[key] === 'numeric').length > 1){
        return true;
    }
    return keys.some(key => classifiedColumns[key] === 'string');
};

export default validateData;