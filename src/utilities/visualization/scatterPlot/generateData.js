import findTopNColumns from "./findTopNColumns";

const generateData = (preparedData, firstColumn, secondColumn, thirdColumn) => {
    const top5Values = findTopNColumns(preparedData, firstColumn, secondColumn, thirdColumn, 5);
    return top5Values
        .map(columnValue => {
            const {column, columnValues} = columnValue;
            const data = columnValues
                .map(valueObj => ({
                    x: valueObj[secondColumn],
                    y: valueObj[thirdColumn]
                }));
            return {
                id: column,
                data
            }
        })
};

export default generateData;