import * as Yup from 'yup';

const processQuestionValidationSchema = Yup.object().shape({

    question: Yup.string()
        .required('Required')

});

export default processQuestionValidationSchema;