import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const toolbar = props => (
  <div>
     <header className="toolbar">



      <nav className="toolbar__navigation"> 
        {/* //the next div should not be visible on bigger screens.  */}
       <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div> 


        <div className="toolbar__logo">
          <a href="/">TimelyACK</a>
        </div> 

       <span className="tspan"></span>

        <img src="./images/TML.png" alt="logo" class="image1" />

        <div className="spacer" /> 
 
        <div className="toolbar_navigation-items"> 

          <ul>
            {/* <li><a href="/home">Home</a></li> */}
            {/* <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li> */}
          </ul>

       </div> 

      </nav>
     </header> 
  </div>
);

export default toolbar;
