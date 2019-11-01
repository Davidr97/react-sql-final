
const findAggregateAverage = (data,numericColumn,otherColumn,otherColumnValue) => {
    const value = data
        .filter(row => row[otherColumn] === otherColumnValue)
        .reduce((sum,row,index,array) => sum + row[numericColumn]/array.length,0);
    return {
        [otherColumn] : otherColumnValue,
        value
    }
};

export default findAggregateAverage;