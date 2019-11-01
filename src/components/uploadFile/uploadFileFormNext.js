import React from 'react';
import {Formik, Form} from 'formik';
import validate from "../../utilities/uploadFile/validate";
import {MDBBtn, MDBIcon} from "mdbreact";

const uploadFileFormNext = ({uploaded,uploadState,nextStep}) => {
    console.log(uploaded);
    console.log(uploadState);
    return (
        <div>
            <Formik
                validate={() => validate(uploaded,uploadState)}
                onSubmit={() => {
                    nextStep();
                }}>
                {({errors}) => (
                    <div>
                        <Form>
                            <MDBBtn color="primary" type="submit">
                                Next <MDBIcon icon="arrow-right" className="ml-1" />
                            </MDBBtn>
                            {errors.message ? (
                                <div>
                                    <span className="red-text">{errors.message}</span>
                                </div>
                            ) : null}
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
};

export default uploadFileFormNext;