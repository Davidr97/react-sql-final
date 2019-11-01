import requestOptions from "./requestOptions";

const postData = (url, textInput) => {
    const init = requestOptions('POST',textInput,{
        'Content-Type': 'application/x-www-form-urlencoded'
    });
    return fetch(url,init);
};

export default postData;