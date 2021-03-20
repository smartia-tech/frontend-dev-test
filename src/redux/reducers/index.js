import { combineReducers } from 'redux';
import { launchReducer } from './launchReducer';

export const rootReducer = combineReducers({
  launches: launchReducer,
});
