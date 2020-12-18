import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 2000);
  }, [history]);

  return (
    <div>
      <h1>404 :(</h1>
      <div>this page does not exit. You will redirect to home page soon...</div>
    </div>
  );
}

export default NotFound;
