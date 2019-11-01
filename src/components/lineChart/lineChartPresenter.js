import React from 'react';
import LineChartForm from "../../configs/lineChartForm/bootstrap";
import LineChart from "./lineChart";
import classifyColumnsNoNull from "../../utilities/visualization/common/classifyColumnsNoNulls";
import validate from "../../utilities/visualization/lineChartForm/validate";
import prepareData from "../../utilities/visualization/lineChart/prepareData";
import generateData from "../../utilities/visualization/lineChart/generateData";
import LineChartNoDataMessage from "./lineChartNoDataMessage";
import {MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBIcon, MDBRow} from "mdbreact";

const lineChartPresenter = ({data,firstColumnValue,secondColumnValue,thirdColumnValue,aggregateByValue,trackState}) => {

    const classifiedColumns = classifyColumnsNoNull(data);
    const firstColumnValues = Object.keys(classifiedColumns)
        .filter(key => classifiedColumns[key] === 'numeric' || classifiedColumns[key] === 'string');
    const secondColumnValues = Object.keys(classifiedColumns);
    const thirdColumnValues = Object.keys(classifiedColumns)
        .filter(key => classifiedColumns[key] === 'numeric');
    const aggregateByValues = ['sum','average','max','min'];

    const formProps = {
        firstColumnValues,
        secondColumnValues,
        thirdColumnValues,
        aggregateByValues,
        trackState,
        validate
    };

    if(firstColumnValue === undefined){
        const message = "Please select columns and generate the chart so it can be displayed.";
        return (
            <MDBCard>
                <MDBCardHeader>
                    <MDBIcon icon="chart-line" className="mr-1"/>Line chart
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md="9" className="d-flex justify-content-center align-items-center">
                            <LineChartNoDataMessage message={message}/>
                        </MDBCol>
                        <MDBCol md="3" className="border-left border-secondary">
                            <LineChartForm {...formProps}/>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        )
    }

    const preparedData = prepareData(data,firstColumnValue,secondColumnValue,thirdColumnValue);
    const generatedData = generateData(preparedData,firstColumnValue,secondColumnValue,thirdColumnValue,aggregateByValue);

    const chartProps = {
        secondColumn: secondColumnValue,
        data,
        generatedData
    };

    return (
        <MDBCard>
            <MDBCardHeader>
                <MDBIcon icon="chart-line" className="mr-1"/>Line chart
            </MDBCardHeader>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol md="9" className={generatedData ? "" : "d-flex justify-content-center align-items-center"}>
                        {generatedData ? (
                            <LineChart {...chartProps}/>
                        ) : <LineChartNoDataMessage message="No chart could be generated with the specified columns."/>}
                    </MDBCol>
                    <MDBCol md="3" className="border-left border-secondary">
                        <LineChartForm {...formProps}/>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
};

export default lineChartPresenter;