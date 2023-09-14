function getUrl()
{
    return getQueryParams(window.location.href);
}

// eslint-disable-next-line no-unused-vars
function getQueryParams(url) {
    const paramArr = url.slice(url.indexOf('?') + 1).split('&');
    const params = {};
    paramArr.map(param => {
        const [key, val] = param.split('=');
        params[key] = decodeURIComponent(val);
    })
    return params;
}