import React, { useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrency } from './actions';
import ItemList from './components/ItemList';
import ReceivedList from './components/ReceivedList';
import NavBar from './components/NavBar';
import './styles/App.css';

function App() {
  const dispatch = useDispatch();
  const lastCurrency = useSelector((state) => state.mainReducer.currency);

  // Use hash function to check if the state has been changed
  const hashString = useCallback((str) => {
    var hash = 0;
    if (str.length === 0) {
      return hash;
    }
    for (var i = 0; i < str.length; i++) {
      var char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }, []);

  // Fetch current currency base on USD every 10 seconds
  useEffect(() => {
    const getCurrency = async () => {
      const currentCurrency = await fetch(
        'https://api.exchangeratesapi.io/latest?base=USD'
      ).then((res) => res.json());

      // Change the state if it changed
      if (
        hashString(JSON.stringify(lastCurrency)) !==
        hashString(JSON.stringify(currentCurrency))
      ) {
        dispatch(updateCurrency(currentCurrency));
      }
    };

    getCurrency();

    const interval = setInterval(() => getCurrency(), 10000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, hashString, lastCurrency]);

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/list'>
            <ItemList />
          </Route>
          <Route path='/received'>
            <ReceivedList />
          </Route>
          <Redirect from='/' to='/list' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
