/* eslint-disable import/no-unresolved */
import React from 'react';
import 'utils/dropConsole';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from 'navigation/RouterConfig';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function App() {
  return (
    <>
      <div>
        <Provider store={store}>         
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>  
        </Provider>
      </div>
    </>

  );
}

export default App;
