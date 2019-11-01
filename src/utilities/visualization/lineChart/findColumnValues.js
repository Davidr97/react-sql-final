import findDifferentColumnValues from "./findDifferentColumnValues";
/*For a given column, it returns n column values that have the largest number of different column values for otherColumn */


const findColumnValues = (data,column,otherColumn) => {
    const columnValues = data
        .map(row => row[column]);
    return Array
        .from([...new Set(columnValues)])
        .map(value => findDifferentColumnValues(data,column,otherColumn,value))
        .sort((firstValue, secondValue) => secondValue.values.length - firstValue.values.length)
};

export default findColumnValues;