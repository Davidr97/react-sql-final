import findColumnValues from "./findColumnValues";
import applyAggregateFunction from "./applyAggregateFunction";


const generateData = (data, firstColumn, secondColumn, thirdColumn, aggregateBy) => {
    const topColumnValues = findColumnValues(data,firstColumn,secondColumn)
        .filter(({values}) => values.length <= 12);
    if(topColumnValues.length === 0){
        return null;
    }
    const {[aggregateBy]:aggregateFn} = applyAggregateFunction;
    const aggregateValues = aggregateFn(data,firstColumn,secondColumn,thirdColumn,topColumnValues[0]);
    if(aggregateValues.length < 5){
        return null;
    }
    const {[firstColumn]:id} = aggregateValues[0];
    const lineChartData = aggregateValues
        .map(value => ({
            x: value[secondColumn],
            y: Math.round(value[aggregateBy] * 100)/100
        }));

    return (
        [{
            id,
            "color": "hsl(261, 70%, 50%)",
            data: lineChartData
        }]
    )

};

export default generateData;