import React from 'react';
import ChartTypeForm from "./chartTypeForm";

const withBarChart = (WrappedComponent) => (

    function withBarChartContainer(props){
        const {chartType,chartTypes,trackChartType} = props;
        if(chartType === 'BarChart'){
            return (
                <div>
                    <ChartTypeForm chartTypes={chartTypes} trackChartType={trackChartType}/>
                    Bar Chart
                </div>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withBarChart;