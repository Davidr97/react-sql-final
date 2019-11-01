import React from 'react';
import ChartTypeForm from "./chartTypeForm";
import LineChart from "../../configs/lineChart/bootstrap";
import {MDBCol} from "mdbreact";

const withLineChart = (WrappedComponent) => (

    function withLineChartContainer(props){
        const {chartType,chartTypes,trackChartType,data} = props;
        if(chartType === 'LineChart'){
            return (
                <React.Fragment>
                    <MDBCol md="12">
                        <ChartTypeForm chartTypes={chartTypes} trackChartType={trackChartType}/>
                    </MDBCol>
                    <MDBCol md="12">
                        <LineChart data={data}/>
                    </MDBCol>
                </React.Fragment>
            )
        }
        return <WrappedComponent {...props}/>
    }
);

export default withLineChart;