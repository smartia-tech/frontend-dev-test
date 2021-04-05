import './App.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {Home} from './pages';
import reducers from './redux/reducer';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
