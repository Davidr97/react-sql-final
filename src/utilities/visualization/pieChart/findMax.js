
const findMax = (data,numericColumn,otherColumn,otherColumnValue) => {
    const maxRow = data
        .filter(row => row[otherColumn] === otherColumnValue)
        .sort((firstRow,secondRow) => secondRow[numericColumn] - firstRow[numericColumn])[0];
    const {[numericColumn] : value} = maxRow;
    return {
        [otherColumn] : otherColumnValue,
        value
    }
};

export default findMax;