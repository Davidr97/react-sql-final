import classifyColumns from "../common/classifyColumns";
import convertDate from "../common/convertDate";

const prepareData = (data, secondColumn, thirdColumn) => {
    const classifiedColumns = classifyColumns(data);
    const isSecondColumnDate = classifiedColumns[secondColumn] === 'date';
    const isThirdColumnDate = classifiedColumns[thirdColumn] === 'date';
    if(!isSecondColumnDate && !isThirdColumnDate){
        return data
            .filter(row => row[secondColumn] !== null && row[thirdColumn] !== null);
    }
    return data
        .filter(row => row[secondColumn] !== null && row[thirdColumn] !== null)
        .map(row => {
            if(isSecondColumnDate && isThirdColumnDate){
                return (
                    {
                        ...row,
                        [secondColumn]:convertDate(row[secondColumn]),
                        [thirdColumn]:convertDate(row[thirdColumn])
                    }
                )
            }else if(isSecondColumnDate){
                return (
                    {
                        ...row,
                        [secondColumn]:convertDate(row[secondColumn])
                    }
                )
            }else{
                return (
                    {
                        ...row,
                        [thirdColumn]:convertDate(row[thirdColumn])
                    }
                )
            }
        })
};

export default prepareData;