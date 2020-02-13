import React from 'react';

const Header = ({ title }) => (
    <div>
      <a href="/">Home</a>
      <a href="/schedule">Schedule</a>
      <a href="/availability">Availability</a>
      <h1>{title}</h1>
    </div>
  );

  export default Header;

  //theoretically, we can create two components folders

  // one to house login access routing to "home"

  //second folder will be the routing for the home-page of a user