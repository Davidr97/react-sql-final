
const validate = values => {
    let errors = {};
    const {firstColumnValue, secondColumnValue} = values;
    if(firstColumnValue === secondColumnValue){
        errors.message = 'Error';
    }
    return errors;
};

export default validate;