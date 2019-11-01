import classifyColumns from "../common/classifyColumns";
import convertDate from "../common/convertDate";

const prepareData = (data,firstColumn,secondColumn,thirdColumn) => {
    const preparedData = data
        .filter(row => row[firstColumn] !== null && row[secondColumn] !== null && row[thirdColumn] !== null);
    const classifiedColumns = classifyColumns(data);
    if(classifiedColumns[secondColumn] !== 'date'){
        return preparedData;
    }
    return preparedData.
        map(row => (
        {
            ...row,
            [secondColumn]:convertDate(row[secondColumn])
        }
    ));
};

export default prepareData;