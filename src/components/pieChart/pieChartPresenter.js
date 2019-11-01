import React from 'react';
import PieChartForm from "../../configs/pieChartForm/bootstrap";
import PieChart from "./pieChart";
import classifyColumnsNoNull from "../../utilities/visualization/common/classifyColumnsNoNulls";
import validate from "../../utilities/visualization/pieChartForm/validate";
import PieChartNoDataMessage from "./pieChartNoDataMessage";
import {MDBCard,MDBCardHeader,MDBCardBody,MDBRow,MDBCol,MDBIcon} from "mdbreact";

const pieChartPresenter = ({data,firstColumnValue,secondColumnValue,aggregateByValue,trackState}) => {

    const classifiedColumns = classifyColumnsNoNull(data);
    const firstColumnValues = Object.keys(classifiedColumns)
        .filter(key => classifiedColumns[key] === 'numeric' || classifiedColumns[key] === 'string');
    const secondColumnValues = Object.keys(classifiedColumns)
        .filter(key => classifiedColumns[key] === 'numeric');
    const aggregateByValues = ['sum','average','max','min'];

    const formProps = {
        firstColumnValues,
        secondColumnValues,
        aggregateByValues,
        trackState,
        validate
    };

    const chartProps = {
        firstColumn: firstColumnValue,
        secondColumn: secondColumnValue,
        aggregateBy: aggregateByValue,
        data
    };

    return (
        <MDBCard>
            <MDBCardHeader>
                <MDBIcon icon="chart-pie" className="mr-1"/>Pie chart
            </MDBCardHeader>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol md="9" className={firstColumnValue ? "" : "d-flex justify-content-center align-items-center"}>
                        {firstColumnValue ? <PieChart {...chartProps}/> : <PieChartNoDataMessage/>}
                    </MDBCol>
                    <MDBCol md="3" className="border-left border-secondary">
                        <PieChartForm {...formProps}/>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
};

export default pieChartPresenter;