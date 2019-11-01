
const findMin = (data,numericColumn,otherColumn,otherColumnValue) => {
    const minRow = data
        .filter(row => row[otherColumn] === otherColumnValue)
        .sort((firstRow,secondRow) => firstRow[numericColumn] - secondRow[numericColumn])[0];
    const {[numericColumn] : value} = minRow;
    return {
        [otherColumn] : otherColumnValue,
        value
    }
};

export default findMin;