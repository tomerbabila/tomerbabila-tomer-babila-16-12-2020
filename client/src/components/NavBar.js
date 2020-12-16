import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <h2>Items Tracker</h2>
      <div>
        <div>
          <Link to={'/list'}>List</Link>
        </div>
        <div>
          <Link to={'/received'}>Received</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
