import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import options from "../../configs/scatterPlot/options";
import prepareData from "../../utilities/visualization/scatterPlot/prepareData";
import generateData from "../../utilities/visualization/scatterPlot/generateData";
import classifyColumns from "../../utilities/visualization/common/classifyColumns";
import axisScaleOptions from "../../utilities/visualization/common/axisScaleOptions";

const ScatterPlot = ({ data, firstColumn, secondColumn, thirdColumn }) => {

    const preparedData = prepareData(data,secondColumn,thirdColumn);
    const generatedData = generateData(preparedData,firstColumn,secondColumn,thirdColumn);
    const classifiedColumns = classifyColumns(data);
    const {[secondColumn] : xType} = classifiedColumns;
    const{[thirdColumn] : yType} = classifiedColumns;
    const xProps = axisScaleOptions(xType,'xScale');
    const yProps = axisScaleOptions(yType,'yScale');

    return (
        <div className="pie">
            <ResponsiveScatterPlot
            data={generatedData}
            {...options}
            {...xProps}
            {...yProps}/>
        </div>
    )
};

export default ScatterPlot;

