

const validate = (connectionString) => {
    let errors = {};
    if(connectionString === null){
        errors.message = "Connection string must be provided";
    }
    return errors;
};

export default validate;