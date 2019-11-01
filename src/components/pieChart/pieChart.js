import { ResponsivePie } from '@nivo/pie'
import React from "react";
import options from "../../configs/pieChart/options";
import generateData from "../../utilities/visualization/pieChart/generateData";

const PieChart = ({ data, firstColumn, secondColumn, aggregateBy }) => (
    <div className="pie">
        <ResponsivePie
            data={generateData(data,secondColumn,firstColumn, aggregateBy)}
            {...options}
        />
    </div>
);

export default PieChart;