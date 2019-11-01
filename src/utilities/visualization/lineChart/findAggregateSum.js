
const findAggregateSum = (data,column,otherColumn,numericColumn,columnValuesObj) => {
    const {columnValue, values} = columnValuesObj;
    return values
        .reduce((array,otherColumnValue) => {
            const sum = data
                .filter(row => row[column] === columnValue && row[otherColumn] === otherColumnValue)
                .reduce((summedValue,row) => summedValue + row[numericColumn], 0);
            return (
                [
                    ...array,
                    {
                        [column]:columnValue,
                        [otherColumn]:otherColumnValue,
                        sum
                    }
                ]
            )
        },[])
};

export default findAggregateSum;