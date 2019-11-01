import React from 'react';
import {Formik, Form, Field} from 'formik';
import optionsGenerator from "../visualization/optionsGenerator";
import {MDBBtn, MDBIcon, MDBAlert} from "mdbreact";

const chartStateForm = (...propsNames) =>
    (...axesNames) =>
    (props) => {

        const propsValues = propsNames
            .map(propName => props[propName]);
        const axesValues = axesNames
            .reduce((values,axisName,index) => ({
                ...values,
                [axisName]:propsValues[index][0]
            }),{});
        const {validate} = props;

        return (
                <Formik
                    initialValues={axesValues}
                    onSubmit={values => {
                        const {trackState} = props;
                        const fieldValues = axesNames
                            .map(axisName => values[axisName]);
                        trackState(...fieldValues);
                    }}
                    validate={validate}>
                    {({errors}) => (
                        <Form>
                            {axesNames.map((axisName,index) => (
                                <div key={index} className="form-group">
                                    <label htmlFor={axisName}>{axisName}</label>
                                    <Field component="select" name={axisName} className="browser-default custom-select">
                                        {optionsGenerator(propsValues[index])}
                                    </Field>
                                </div>
                            ))}
                            {errors.message &&
                            <MDBAlert color="danger" className="text-center">
                                Select different columns!
                            </MDBAlert>}
                            <div className="form-group text-center">
                                <MDBBtn color="primary" type="submit">
                                    <MDBIcon icon="chart-bar" className="mr-1"/>
                                    Generate chart
                                </MDBBtn>
                            </div>
                        </Form>
                    )}
                </Formik>
        )


    };

export default chartStateForm;