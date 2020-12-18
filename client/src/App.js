import React, { useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrency, screenSizeChanges } from './actions';
import MainItemList from './components/MainItemList';
import MainReceivedList from './components/MainReceivedList';
import NavBar from './components/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';

function App() {
  const dispatch = useDispatch();

  const lastCurrency = useSelector((state) => state.currencyReducer.currency);
  const time = useSelector((state) => state.currencyReducer.time);

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
      try {
        const currentCurrency = await fetch(
          'https://api.exchangeratesapi.io/latest?base=USD'
        ).then((res) => res.json());

        // Change the state if changed
        if (
          hashString(JSON.stringify(lastCurrency)) !==
          hashString(JSON.stringify(currentCurrency))
        ) {
          dispatch(updateCurrency(currentCurrency));
        }
      } catch (error) {
        throw new Error(error);
      }
    };

    getCurrency();

    const interval = setInterval(() => getCurrency(), time);

    return () => {
      clearInterval(interval);
    };
  }, [time, lastCurrency, dispatch, hashString]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        screenSizeChanges({
          height: window.innerHeight,
          width: window.innerWidth,
        })
      );
    };
    // Listen to screen resize
    window.addEventListener('resize', handleResize);
  });

  return (
    <div className='App'>
      <ErrorBoundary>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/list'>
              <MainItemList />
            </Route>
            <Route path='/received'>
              <MainReceivedList />
            </Route>
            <Redirect from='/' to='/list' />
          </Switch>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
