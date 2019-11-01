import React from 'react';
import ScatterPlotForm from "../../configs/scatterPlotForm/bootstrap";
import ScatterPlot from "./scatterPlot";
import classifyColumnsNoNull from "../../utilities/visualization/common/classifyColumnsNoNulls";
import validate from "../../utilities/visualization/scatterPlotForm/validate";
import ScatterPlotNoDataMessage from "./scatterPlotNoDataMessage";
import {MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBIcon, MDBRow} from "mdbreact";


const scatterPlotPresenter = ({data,firstColumnValue,secondColumnValue,thirdColumnValue,trackState}) => {

    const classifiedColumns = classifyColumnsNoNull(data);
    const firstColumnValues = Object.keys(classifiedColumns)
        .filter(key => classifiedColumns[key] === 'numeric' || classifiedColumns[key] === 'string');
    const secondColumnValues = Object.keys(classifiedColumns);
    const thirdColumnValues = Object.keys(classifiedColumns);

    const formProps = {
        firstColumnValues,
        secondColumnValues,
        thirdColumnValues,
        trackState,
        validate
    };

    const chartProps = {
        firstColumn:firstColumnValue,
        secondColumn:secondColumnValue,
        thirdColumn:thirdColumnValue,
        data
    };

    return (
        <MDBCard>
            <MDBCardHeader>
                <MDBIcon icon="chart-area" className="mr-1"/>Scatter plot
            </MDBCardHeader>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol md="9" className={firstColumnValue ? "" : "d-flex justify-content-center align-items-center"}>
                        {firstColumnValue ? <ScatterPlot {...chartProps}/> : <ScatterPlotNoDataMessage/>}
                    </MDBCol>
                    <MDBCol md="3" className="border-left border-secondary">
                        <ScatterPlotForm {...formProps}/>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )

};

export default scatterPlotPresenter;