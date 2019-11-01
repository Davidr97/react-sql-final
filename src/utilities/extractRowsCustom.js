
const extractRowsCustom = (data) => {
    let rows = [];

    data.forEach(row => {
        let obj = {};
        Object.keys(row).forEach((key,index) => {
            obj[index+1] = row[key];
        });
        rows.push(obj);
    });

    return rows;
};

export default extractRowsCustom;