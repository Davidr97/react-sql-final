
const requestOptions = (method='GET', body=null, headers=null,
                        mode='cors', cache='no-cache',
                        credentials='same-origin',redirect='follow') => ({
    method,
    headers,
    mode,
    cache,
    credentials,
    redirect,
    body
});

export default requestOptions;