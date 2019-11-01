import React from 'react';
import ChartTypeForm from "./chartTypeForm";

const visualizationPresenter = (props) => {
    const {chartTypes,trackChartType} = props;
    return (
        <ChartTypeForm chartTypes={chartTypes} trackChartType={trackChartType}/>
    )
};

export default visualizationPresenter;