import _uniqWith from "lodash/uniqWith";
import _isEqual from "lodash/isEqual";

const findDifferentColumnValues = (data, column, firstNumericColumn, secondNumericColumn, value) => {
    let columnValues = data
        .filter(row => row[column] === value && row[firstNumericColumn] !== null && row[secondNumericColumn] != null)
        .reduce((values, row) =>
            values
                .filter(value => value[firstNumericColumn] === row[firstNumericColumn] &&
                    value[secondNumericColumn] === row[secondNumericColumn]).length <= 0 ?
            [...values,{
                [firstNumericColumn] : row[firstNumericColumn],
                [secondNumericColumn] : row[secondNumericColumn]
            }]
                : values
        ,[]);
    columnValues = _uniqWith(columnValues,_isEqual)
        .slice(0,40);
    return (
        {
            column:value,
            columnValues
        }
    )
};

export default findDifferentColumnValues;