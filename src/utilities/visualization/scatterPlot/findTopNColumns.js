import findDifferentColumnValues from "./findDifferentColumnValues";

const findTopNColumns = (data,firstColumn,secondColumn,thirdColumn,N) => {
    const columnValues = data
        .map(row => row[firstColumn]);
    return Array
        .from([...new Set(columnValues)])
        .map(value => findDifferentColumnValues(data,firstColumn,secondColumn,thirdColumn,value))
        .sort((firstObj,secondObj) => secondObj.columnValues.length - firstObj.columnValues.length)
        .slice(0, N)
};

export default findTopNColumns;