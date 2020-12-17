import React, { useEffect } from 'react';
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

  // Fetch current currency base on USD every 10 seconds
  useEffect(() => {
    // TODO: Do not change state if it is the same
    const getCurrency = async () => {
      const currentCurrency = await fetch(
        'https://api.exchangeratesapi.io/latest?base=USD'
      ).then((res) => res.json());
      if (JSON.stringify(lastCurrency) !== JSON.stringify(currentCurrency)) {
        dispatch(updateCurrency(currentCurrency));
      }
      console.log(currentCurrency);
    };
    getCurrency();
    const interval = setInterval(() => getCurrency(), 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
