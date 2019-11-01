import React from 'react';
import {Formik, Form} from 'formik';

const uploadFileFormPrevious = ({previousStep}) => {
    return (
        <div>
            <Formik
                onSubmit={() => {
                    previousStep();
                }}>
                {() => (
                    <div>
                        <Form>
                            <button type="submit">Previous</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
};

export default uploadFileFormPrevious;