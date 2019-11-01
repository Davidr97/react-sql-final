
const extractColumns = (data) => {
    if(data.length === 0){
        return null;
    }
    return Object.keys(data[0]);
};

export default extractColumns;