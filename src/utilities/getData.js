
const getData = (url) => {
    return fetch(url, {
        mode:'no-cors'
    })
};

export default getData;