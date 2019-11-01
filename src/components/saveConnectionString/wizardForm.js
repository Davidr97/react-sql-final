import React from 'react';
import {Formik, Form} from 'formik';
import validate from "../../utilities/saveConnectionString/validate";
import {MDBBtn, MDBIcon, MDBAlert} from "mdbreact";

const wizardForm = ({connectionString,nextStep}) => {
    return (
        <Formik
            validate={() => validate(connectionString)}
            onSubmit={() => {
                nextStep();
            }}
        >
            {({errors}) => (
                <div className="m-0 ml-auto">
                    <Form>
                        <MDBBtn color="primary" type="submit">
                            Next <MDBIcon icon="arrow-right" className="ml-1" />
                        </MDBBtn>
                        {errors.message ? (
                            <MDBAlert color="danger">
                                {errors.message}
                            </MDBAlert>
                        ) : null}
                    </Form>
                </div>
            )}
        </Formik>
    )
};

export default wizardForm;