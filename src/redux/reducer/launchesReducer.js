import enums from '../enums';

const INITIAL_STATE = {
  lauches: [],
  paginatedLauches: [],
  paginationInfo: {
    page: 1,
    nextPage: null,
    prevPage: null,
    totalPages: null,
  },
  loading: false,
  searchResults: []
};

const LaunchesReducer = (state = INITIAL_STATE, action) => {
  let total_pages;
  let nextPaginationPage;
  let prevPaginationPage;
  let obj = {}

  switch (action.type) {
    case enums.FETCH_LAUNCHES:
      let payload = action.payload;

      let paginatePayload = payload;
      paginatePayload = paginatePayload.slice(0, 10)

      total_pages = Math.ceil(payload.length / 10);
      nextPaginationPage = (total_pages > 1) ? 1 + 1 : null;
      prevPaginationPage = 1 - 1 ? 1 - 1 : null;

      obj = {
        page: 1,
        nextPage: nextPaginationPage,
        prevPage: prevPaginationPage,
        totalPages: total_pages
      }

      return { ...state, lauches: payload, paginatedLauches: paginatePayload, paginationInfo: { ...obj } };

    case enums.NEXT_PAGE:
      let nextPage = state.paginationInfo.page + 1;

      let data = state.lauches.slice((nextPage - 1) * 10, nextPage * 10);

      total_pages = Math.ceil(state.lauches.length / 10);
      nextPaginationPage = (total_pages > nextPage) ? nextPage + 1 : null;
      prevPaginationPage = nextPage - 1 ? nextPage - 1 : null;

      obj = {
        page: nextPage,
        nextPage: nextPaginationPage,
        prevPage: prevPaginationPage,
        totalPages: total_pages
      }

      return { ...state, paginatedLauches: data, paginationInfo: { ...obj } }

    case enums.PREVIOUS_PAGE:
      let prevPage = state.paginationInfo.page - 1;

      let _data;

      if (state.paginationInfo.page - 1 === 0) {
        _data = state.lauches.slice(0, 10);
      }
      _data = state.lauches.slice((prevPage - 1) * 10, prevPage * 10);

      total_pages = Math.ceil(state.lauches.length / 10);
      nextPaginationPage = (total_pages > prevPage) ? prevPage + 1 : null;
      prevPaginationPage = prevPage - 1 ? prevPage - 1 : null;

      obj = {
        page: prevPage,
        nextPage: nextPaginationPage,
        prevPage: prevPaginationPage,
        totalPages: total_pages
      }

      return { ...state, paginatedLauches: _data, paginationInfo: { ...obj } }

    case enums.SET_LOADING:
      return { ...state, loading: action.payload }

    case enums.SEARCH_LAUNCHES:
      let searchStr = action.payload;
      let searchData = state.lauches;

      if (searchStr.length === 0) {
        return { ...state, searchResults: [] }
      }
    
      let searchResults = searchData.filter((l) => {
        let launch = `${l.name.toLowerCase()}`;
        let text = searchStr.toLowerCase();

        return launch.indexOf(text) > -1;
      });

      return { ...state, searchResults }
    default:
      return state;
  }
};

export default LaunchesReducer