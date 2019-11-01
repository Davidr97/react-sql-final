
const isDate = (string) => {
    return !isNaN(Date.parse(string));
};

export default isDate;