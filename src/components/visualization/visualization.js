import React from 'react';
import Visualization from "../../configs/visualization/bootstrap";
import validatePieChartData from "../../utilities/visualization/pieChart/validateData";
import validateScatterPlotData from "../../utilities/visualization/scatterPlot/validateData";
import validateLineChartData from "../../utilities/visualization/lineChart/validateData";

const preVisualization = ({data}) => {

    const chartTypes = [];

    if(validatePieChartData(data)){
        chartTypes.push('PieChart');
    }
    if(validateScatterPlotData(data)){
        chartTypes.push('ScatterPlot');
    }
    if(validateLineChartData(data)){
        chartTypes.push('LineChart');
    }
    return (
        <Visualization data={data} chartTypes={chartTypes}/>
    )
};

export default preVisualization;