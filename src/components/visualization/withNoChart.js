import React from 'react';
import {MDBCol} from "mdbreact";
import ChartTypeForm from "./chartTypeForm";

const withNoChart = (WrappedComponent) => (

    function withScatterPlotContainer(props){
        const {chartType,chartTypes,trackChartType} = props;
        if(!chartType){
            return (
                <MDBCol md="12">
                    <ChartTypeForm chartTypes={chartTypes} trackChartType={trackChartType}/>
                </MDBCol>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withNoChart;