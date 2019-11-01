/* For a given column value, it returns an array of different values for otherColumn*/


const findDifferentColumnValues = (data,column,otherColumn,value) => {
    const columnValues =
        data
        .filter(row => row[column] === value)
        .map(row => row[otherColumn]);
    return (
        {
            columnValue:value,
            values:[...new Set(columnValues)]
        }
    )
};

export default findDifferentColumnValues;