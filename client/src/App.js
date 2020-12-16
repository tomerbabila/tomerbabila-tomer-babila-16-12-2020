import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ItemList from './components/ItemList';
import ReceivedList from './components/ReceivedList';
import NavBar from './components/NavBar';

function App() {
  return (
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
  );
}

export default App;
