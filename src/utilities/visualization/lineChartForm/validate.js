
const validate = values => {
    let errors = {};
    const {firstColumnValue, secondColumnValue, thirdColumnValue} = values;
    if(firstColumnValue === secondColumnValue || firstColumnValue === thirdColumnValue || secondColumnValue === thirdColumnValue){
        errors.message = 'Error';
    }
    return errors;
};

export default validate;