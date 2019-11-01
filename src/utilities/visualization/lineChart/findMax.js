

const findMax = (data,column,otherColumn,numericColumn,columnValuesObj) => {
    const {columnValue, values} = columnValuesObj;
    return values
        .reduce((array,otherColumnValue) => {
            const maxRow = data
                .filter(row => row[column] === columnValue && row[otherColumn] === otherColumnValue)
                .sort((firstRow, secondRow) => secondRow[numericColumn] - firstRow[numericColumn])[0];
            return (
                [
                    ...array,
                    {
                        [column]:columnValue,
                        [otherColumn]:otherColumnValue,
                        max: maxRow[numericColumn]
                    }
                ]
            )
        },[])
};

export default findMax;