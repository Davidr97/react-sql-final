import * as Yup from 'yup';

const validationSchema = Yup.object().shape({

    connectionString: Yup.string()
        .required('Required')

});

export default validationSchema;