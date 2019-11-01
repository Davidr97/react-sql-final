
const extractColumnsCustom = (data) => {
    let headers = data[0];
    return Object.keys(headers)
        .map((column, index) => ({
            key:index,
            field: (index + 1).toString(),
            header:column
        }))
};

export default extractColumnsCustom;