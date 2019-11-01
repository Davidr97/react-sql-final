
const findAggregateSum = (data,numericColumn,otherColumn,otherColumnValue) => {
    const value = data
            .filter(row => row[otherColumn] === otherColumnValue)
            .reduce((sum,row) => sum + row[numericColumn],0);
    return {
        [otherColumn] : otherColumnValue,
        value
    }
};

export default findAggregateSum;