import {combineReducers} from 'redux';

import LaunchesReducer from './launchesReducer';
import ModalReducer from './modalReducer';

const rootReducer = combineReducers({
  launches: LaunchesReducer,
  modals: ModalReducer,
});

export default rootReducer;
