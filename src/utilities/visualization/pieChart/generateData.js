import findTopNColumnValues from "./findTopNColumnValues";
import colors from "../../../configs/pieChart/colors";

const generateData = (data, numericColumn, otherColumn, aggregateBy) => {
    const values = findTopNColumnValues(data,numericColumn,otherColumn,aggregateBy,5);
    return values
        .map((columnValue,index) => ({
            id: columnValue[otherColumn],
            label: columnValue[otherColumn],
            value: Math.round(columnValue['value'] * 100)/100,
            color: colors[index]
        }))
};

export default generateData;