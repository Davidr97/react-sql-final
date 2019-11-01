
const findAggregateAverage = (data,column,otherColumn,numericColumn,columnValuesObj) => {
    const {columnValue, values} = columnValuesObj;
    return values
        .reduce((array,otherColumnValue) => {
            const average = data
                .filter(row => row[column] === columnValue && row[otherColumn] === otherColumnValue)
                .reduce((summedValue,row,index,array) => summedValue + row[numericColumn]/array.length, 0);
            return (
                [
                    ...array,
                    {
                        [column]:columnValue,
                        [otherColumn]:otherColumnValue,
                        average
                    }
                ]
            )
        },[])
};

export default findAggregateAverage;