import findColumnValues from "./findColumnValues";
/*For a given column, it returns n column values that have the largest number of different column values for otherColumn */


const findTopNColumnValues = (data,column,otherColumn,N) => {
    return findColumnValues(data,column,otherColumn)
        .slice(0, N);
};

export default findTopNColumnValues;