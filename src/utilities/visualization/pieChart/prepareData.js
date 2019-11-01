
const prepareData = (data, numericColumn, otherColumn) => {
    return data
            .filter(row => row[numericColumn] !== null && row[otherColumn] !== null);
};

export default prepareData;