import React from 'react';
import ChartTypeForm from "./chartTypeForm";
import ScatterPlot from "../../configs/scatterPlot/bootstrap";
import {MDBCol} from "mdbreact";


const withScatterPlot = (WrappedComponent) => (

    function withScatterPlotContainer(props){
        const {chartType,chartTypes,trackChartType,data} = props;
        if(chartType === 'ScatterPlot'){
            return (
                <React.Fragment>
                    <MDBCol md="12">
                        <ChartTypeForm chartTypes={chartTypes} trackChartType={trackChartType}/>
                    </MDBCol>
                    <MDBCol md="12">
                        <ScatterPlot data={data}/>
                    </MDBCol>
                </React.Fragment>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withScatterPlot;