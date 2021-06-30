import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'tachyons';

import './index.css';
import App from './App';

import { store} from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
