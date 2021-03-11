function fetchAbsolute(fetch) {
  return (baseUrl) => (url, ...otherParams) =>
    url.startsWith("/")
      ? fetch(baseUrl + url, ...otherParams)
      : fetch(url, ...otherParams);
}

const fetchApi = fetchAbsolute(fetch)(process.env.REACT_APP_BACKEND_BASE_URL);

export default fetchApi;
