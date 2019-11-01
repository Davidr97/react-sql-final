import React from 'react';
import {Formik, Form, Field} from 'formik';
import executeSqlQueryValidationSchema from "../../configs/processSqlQuery/executeSqlQueryValidationSchema";
import ExecuteSqlQueryTextarea from "./executeSqlQueryTextarea";
import {MDBBtn, MDBIcon} from "mdbreact";

const executeSqlQueryForm = (props) => (
        <Formik
            initialValues={{
                query:props.sqlQuery ? props.sqlQuery : ''
            }}
            validationSchema={executeSqlQueryValidationSchema}
            onSubmit={values => {
                const {executeSqlQuery, forwardProps} = props;
                const prevProps = {
                    sqlQuery : values.query
                };
                forwardProps(prevProps);
                executeSqlQuery(values.query);
            }}>
            {({errors, touched}) => (
                <Form>
                    <Field name="query" component={ExecuteSqlQueryTextarea}/>
                    {errors.query && touched.query ? (
                        <div>{errors.query}</div>
                    ) : null}
                    <MDBBtn color="primary" type="submit">
                        <MDBIcon icon="search" className="mr-1"/>
                        Execute
                    </MDBBtn>
                </Form>
            )}
        </Formik>
);


export default executeSqlQueryForm;