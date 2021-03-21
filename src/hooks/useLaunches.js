import { useReducer, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.spacexdata.com/v4/launches/query";

const ACTIONS = {
  FETCH_DATA_START: "FETCH_DATA_START",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
};

function launchesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_START:
      return { ...state, loading: true };

    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    default:
      return state;
  }
}

const initialState = {
  data: { docs: [] },
  loading: true,
};

export default function useLaunches(options, query) {
  const [state, dispatch] = useReducer(launchesReducer, initialState);

  useEffect(() => {
    async function init() {
      dispatch({ type: ACTIONS.FETCH_DATA_START });
      const { data } = await axios.post(BASE_URL, {
        options,
        query,
      });
      dispatch({ type: ACTIONS.FETCH_DATA_SUCCESS, payload: { data } });
    }

    init();
  }, [options, query]);

  return state;
}
