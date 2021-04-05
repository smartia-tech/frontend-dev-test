import enums from '../enums';

export const fetchLaunches = () => {
  return (dispatch) => {
    dispatch({ type: enums.SET_LOADING, payload: true });
    fetch('https://api.spacexdata.com/v4/launches/')
      .then(response => response.json())
      .then(res => {
        dispatch({ type: enums.SET_LOADING, payload: false });
        dispatch({ type: enums.FETCH_LAUNCHES, payload: res });
      })
      .catch(error => {
        console.log(error); 
        dispatch({ type: enums.SET_LOADING, payload: false });
      })
  }
};

export const nextPage = () => {
  return {
    type: enums.NEXT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: enums.PREVIOUS_PAGE,
  };
};

export const setLoading = (loading) => {
  return {
    type: enums.SET_LOADING,
    payload: loading,
  }
}

export const searchLaunches = (text) => {
  return {
    type: enums.SEARCH_LAUNCHES,
    payload: text,
  }
}