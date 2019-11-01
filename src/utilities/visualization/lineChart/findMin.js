

const findMin = (data,column,otherColumn,numericColumn,columnValuesObj) => {
    const {columnValue, values} = columnValuesObj;
    return values
        .reduce((array,otherColumnValue) => {
            const minRow = data
                .filter(row => row[column] === columnValue && row[otherColumn] === otherColumnValue)
                .sort((firstRow, secondRow) => firstRow[numericColumn] - secondRow[numericColumn])[0];
            return (
                [
                    ...array,
                    {
                        [column]:columnValue,
                        [otherColumn]:otherColumnValue,
                        min: minRow[numericColumn]
                    }
                ]
            )
        },[])
};

export default findMin;