

const validate = (uploaded,state) => {
    let errors = {};
    if(!uploaded || !state){
        errors.message = "You must upload a file";
    }
    return errors;
};

export default validate;