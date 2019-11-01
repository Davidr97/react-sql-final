import extractColumns from "./extractColumns";
import isDate from "./isDate";

const classifyColumns = (data) => {
    const columns = extractColumns(data);
    return columns.reduce((classifiedColumns, column) => {
        const columnValues = data
            .map(row => row[column])
            .filter(columnValue => columnValue !== null);
        if(columnValues.length === 0){
            return {
                ...classifiedColumns,
                [column] : 'null'
            }
        }else{
            const value = columnValues[0];
            if(!isNaN(value)){
                return {
                    ...classifiedColumns,
                    [column] : 'numeric'
                }
            }else if(isDate(value)){
                return {
                    ...classifiedColumns,
                    [column] : 'date'
                }
            }else{
                return {
                    ...classifiedColumns,
                    [column] : 'string'
                }
            }
        }
    }, {})
};

export default classifyColumns;