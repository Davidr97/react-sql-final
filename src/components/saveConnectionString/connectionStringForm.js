import React from 'react';
import {Formik, Form, Field} from 'formik';
import validationSchema from "../../configs/saveConnectionString/validationSchema";
import ConnectionStringTextarea from "./connectionStringTextArea";
import { MDBBtn, MDBIcon } from "mdbreact";

const connectionStringForm = ({updateConnectionString}) => {

    return (
        <div>
            <Formik
                initialValues={{
                    connectionString:''
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    const {connectionString} = values;
                    updateConnectionString(connectionString);
                }}>
                {() => (
                    <Form>
                        <Field name="connectionString"
                               component={ConnectionStringTextarea}
                               placeholder="Enter the connection string"/>
                        <MDBBtn color="primary" type="submit">
                            <MDBIcon icon="save" className="mr-1"/>
                            Save
                        </MDBBtn>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default connectionStringForm;

