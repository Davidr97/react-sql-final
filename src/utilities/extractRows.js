
const extractRows = (data) => {
    const {rows} = data;
    return Object.keys(rows).map(row => rows[row]);
};

export default extractRows;