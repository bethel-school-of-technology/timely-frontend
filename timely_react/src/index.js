import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/home';
import Availability from './screens/availability';
import Schedule from './screens/schedule';

const Index = ({ pathname }) => {
    switch (pathname) {
      case '/schedule':
        return <Schedule />;
      case '/availability':
        return <Availability />;
      default:
        return <Home />;
    }
  };
  
  let pathname = window.location.pathname;
  
  ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));
  
  window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
  });