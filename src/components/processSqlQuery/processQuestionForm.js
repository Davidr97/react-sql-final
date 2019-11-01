import React from 'react';
import {Formik, Form, Field} from 'formik';
import processQuestionValidationSchema from "../../configs/processSqlQuery/processQuestionValidationSchema";
import ProcessQuestionTextarea from "./processQuestionTextarea";
import {MDBBtn, MDBIcon} from "mdbreact";

const processQuestionForm = (props) => (
        <Formik
            initialValues={{
                question: props.question ? props.question : ''
            }}
            validationSchema={processQuestionValidationSchema}
            onSubmit={values => {
                const {processQuestion, forwardProps} = props;
                const prevProps = {
                    question: values.question
                };
                forwardProps(prevProps);
                processQuestion(values.question);
            }}>
            {() => (
                <Form>
                    <Field name="question" component={ProcessQuestionTextarea}/>
                    <MDBBtn color="primary" type="submit">
                        <MDBIcon icon="wrench" className="mr-1"/>
                        Process
                    </MDBBtn>
                </Form>
            )}
        </Formik>
);

export default processQuestionForm;