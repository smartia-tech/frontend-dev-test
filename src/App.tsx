import './App.css';
import React, { useEffect, useReducer } from 'react';
import { searchLaunchesByName, getpastLaunches } from './services/spaceXapiService'
import { Launch, PaginatedResponse } from './common/types'
import Search from './components/search'
import LaunchListContainer from './components/launchListContainer'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetchData()
    //we want to fetch again when search query or page state change
  }, [state.page, state.lastSearchQuery])

  const fetchData = async () => {
    //reset error and start loading
    dispatch({ type: ActionType.fetchStarted })

    let response: PaginatedResponse;
    const { lastSearchQuery, page } = state;

    try {
      //feels like I should have created separate functions for each operation but for the test purpose I guess its ok
      if (lastSearchQuery) {
        response = await searchLaunchesByName(lastSearchQuery, page)
      } else {
        response = await getpastLaunches(page)
      }

      const newLaunches = response.docs ?? [];
      // set the fetched data        
      dispatch({
        type: ActionType.fetchCompleted,
        payload: {
          newLaunches, totalPages: response.totalPages
        }
      })

    } catch (err) {
      dispatch({ type: ActionType.errorOccured, payload: err.message })
    }

  }

  const setSearchTerm = (value: string) => {
    // we dont want to search the same thing again
    if (value == state.lastSearchQuery) return

    dispatch({ type: ActionType.searchQueryChanged, payload: value })
  }

  const { launches, err, isLoading, totalPages, page } = state
 
  return (
    <div className="App">
      <h1>SpaceX Api Sample App</h1>
      <Search searchAction={setSearchTerm} />
      <LaunchListContainer
        launches={launches}
        errorMessage={err}
        page={page}
        isLoading={isLoading}
        totalPages={totalPages}
        loadMore={() => dispatch({ type: ActionType.nextPage })}
      />
    </div>
  );
}

enum ActionType {
  fetchStarted,
  fetchCompleted,
  errorOccured,
  searchQueryChanged,
  nextPage
}

type Action = {
  type: ActionType,
  payload?: any
}

type AppState = {
  isLoading: boolean,
  err: string | null,
  page: number,
  totalPages: number,
  lastSearchQuery: string,
  launches: Launch[]
}

const initialState: AppState = {
  isLoading: false,
  err: null,
  page: 1,
  totalPages: 0,
  lastSearchQuery: '',
  launches: []
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case ActionType.fetchStarted:
      return { ...state, isLoading: true, err: null }
    case ActionType.errorOccured:
      return { ...state, err: action.payload, isLoading: false }
    case ActionType.searchQueryChanged:
      //when the search query change we want to read the result from page 1
      return { ...state, page: 1, lastSearchQuery: action.payload };
    case ActionType.nextPage:
      return { ...state, page: state.page + 1 };
    case ActionType.fetchCompleted: {
      const { newLaunches, totalPages } = action.payload
      // append the result when load more is clicked causing the page state to be greater than one
      // otherwise just replace with the new result set
      const result = state.page > 1 ? [...state.launches, ...newLaunches] : newLaunches
      return { ...state, isLoading: false, launches: result, totalPages }
    }
    default:
      throw new Error();
  }
}

export default App;
