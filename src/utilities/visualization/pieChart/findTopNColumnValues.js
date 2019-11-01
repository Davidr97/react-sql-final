import applyAggregateFunction from "./applyAggregateFunction";

const findTopNColumnValues = (data,numericColumn,otherColumn,aggregateBy,N) => {
    const {[aggregateBy]:aggregateFunction} = applyAggregateFunction;
    const otherColumnValues = data
        .map(row => row[otherColumn]);
    const compareFn = aggregateBy === 'min' ? (x,y) => x.value - y.value : (x,y) => y.value - x.value;
    return Array
        .from([...new Set(otherColumnValues)])
        .map(value => aggregateFunction(data,numericColumn,otherColumn,value))
        .sort(compareFn)
        .slice(0,N);
};

export default findTopNColumnValues;