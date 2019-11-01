import React from 'react';
import {Formik, Form} from 'formik';
import ConnectionStringForm from "./connectionStringForm";
import validate from "../../utilities/saveConnectionString/validate";



const saveConnectionStringForm = ({connectionString,updateConnectionString,nextStep}) => {
    return (
        <div style={{height:"600px"}}>
            <Formik
                validate={() => validate(connectionString)}
                onSubmit={() => {
                    nextStep();
                }}>
                {({errors}) => (
                    <div>
                        <ConnectionStringForm updateConnectionString={updateConnectionString}/>
                        <Form>
                            <button type="submit">Next</button>
                            {errors.message ? (
                                <div>
                                    {errors.message}
                                </div>
                            ) : null}
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )

};

export default saveConnectionStringForm;