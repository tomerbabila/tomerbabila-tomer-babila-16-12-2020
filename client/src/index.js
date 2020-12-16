import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Imports for redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/rootReducer';

// Imports for MDBootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
