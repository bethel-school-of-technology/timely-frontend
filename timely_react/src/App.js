import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import ReactDOM from 'react-dom'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Routes from './Routes/Routes';
import history from './Services/Services';


import './App.css';

// function App() {
//   return (
//     <Router history={history}>
//       <Routes />
//     </Router>
//   );
// }

class App extends Component {
  state = {
    sideDrawerOpen: false
    }

    // state = {
    //   loggedIn:false
    // }

    // <input type="button" value={this.state.loggedIn ? 'log out': 'log in' } onClick={this.loginHandle.bind(this)}/>

    // loginHandle = () => {
    //   this.setState(prevState => ({
     // loggidIn: !prevState.loggedIn
    // }))
    // }

  // }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
    
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
   let backdrop;
   
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  return (
    
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      <main style={{marginTop: '65px'}}>  
      <br></br>
      <section id="main2">
      <div className="main-text">
       <span>Timely.</span>  <br></br>  where Keeping track <br></br> of sales gets easier
      {/* <p>logo here?</p> */}
      
      
        </div>
        {/* <img src="./images/TimelyLogo.png" alt="logo" /> */}
        </section>

      </main>
      <Router history={history}>
         <Routes />
      </Router>
      
   </div>
  ); 
 }
}

export default App;


