import * as Yup from 'yup';

const executeSqlQueryValidationSchema = Yup.object().shape({

    query: Yup.string()
        .required('Required')

});

export default executeSqlQueryValidationSchema;