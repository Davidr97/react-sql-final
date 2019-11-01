import React from 'react';
import {Formik, Form, Field} from 'formik';
import optionsGenerator from "./optionsGenerator";
import {MDBCard, MDBCardBody,MDBInputGroup, MDBBtn} from "mdbreact";

const chartTypeForm = (props) => {

    const {chartTypes} = props;
    const chartType = chartTypes[0];
    return (
        <Formik
            initialValues={{
                chartType
            }}
            onSubmit={values => {
                const {trackChartType} = props;
                trackChartType(values.chartType);
            }}>
            {() => (
                <MDBCard className="mb-5 mt-5">
                    <MDBCardBody>
                        <Form>
                            <MDBInputGroup
                                containerClassName="mb-3"
                                prepend={
                                    <MDBBtn
                                        color="primary"
                                        outline
                                        className="m-0 px-3 py-2 z-depth-0"
                                        type="submit"
                                    >
                                        Select chart
                                    </MDBBtn>
                                }
                                inputs={
                                    <Field component="select" name="chartType" className="browser-default custom-select">
                                        {optionsGenerator(chartTypes)}
                                    </Field>
                                }
                            />
                        </Form>
                    </MDBCardBody>
                </MDBCard>
            )}
        </Formik>
    )
};


export default chartTypeForm;