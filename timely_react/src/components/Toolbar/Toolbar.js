import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const toolbar = props => (
    <header className="toolbar">

        <nav className="toolbar__navigation">

            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={props.drawerClickHandler} />
            </div>

            <div className="toolbar__logo">
           <a href="/home">Timely</a> <span className="image1"><img src="./images/TimelyLogo.png" width="32" alt="logo" /></span>
             
            </div>

            <div className="spacer" />

            <div className="toolbar_navigation-items">

              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/register">Register</a></li> 
                <li><a href="/login">Login</a></li>     
              </ul>
              
            </div>
            
        </nav>
    </header>


);

export default toolbar;
