
const extractColumns = (data) => {
    const {headers} = data;
    const columns = Object.keys(headers)
        .map((column, index) => (
            {
                key: index,
                field:column,
                header:headers[column]
            }
        ));
    return columns
};

export default extractColumns;