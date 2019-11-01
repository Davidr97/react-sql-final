import React from 'react';
import ChartTypeForm from "./chartTypeForm";
import PieChart from "../../configs/pieChart/bootstrap";
import {MDBCol} from "mdbreact";

const withPieChart = (WrappedComponent) => (

    function withPieChartContainer(props){
        const {chartType,chartTypes,trackChartType,data} = props;
        if(chartType === 'PieChart'){
            return (
                <React.Fragment>
                    <MDBCol md="12">
                        <ChartTypeForm chartTypes={chartTypes} trackChartType={trackChartType}/>
                    </MDBCol>
                    <MDBCol md="12">
                        <PieChart data={data}/>
                    </MDBCol>
                </React.Fragment>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withPieChart;