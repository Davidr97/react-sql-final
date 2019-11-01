import { ResponsiveLine } from '@nivo/line'
import React from 'react';
import options from "../../configs/lineChart/options";
import classifyColumns from "../../utilities/visualization/common/classifyColumns";
import _sortBy from "lodash/sortBy";

const LineChart = ({ data, generatedData, secondColumn }) => {

    const classifiedColumns = classifyColumns(data);
    const {[secondColumn]:xType} = classifiedColumns;
    if(xType === 'date'){
        const sortedData = _sortBy(generatedData[0].data,'x');
        generatedData[0] = {
            ...generatedData[0],
            data: sortedData
        };
    }

    return (
        <div className="pie">
            <ResponsiveLine
                data={generatedData}
                {...options}/>
        </div>
    )
};

export default LineChart;