import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
//import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Routes from './Routes/Routes';
import history from './Services/Services';


import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./Services/auth.service";

import Login from "./components/Login/login.component";
import Registers from "./components/Register/register.component";
import Landing from "./Pages/Landing/Landing";
import HomePage from "./Routes/links_Home";
import SalesPage from "./Pages/Sales/Sales";
import AddSales from "./Pages/AddSales/AddSales";
import Profile from "./Pages/Profile/ProfilePage";
import DrawerToggleButton from './components/SideDrawer/DrawerToggleButton';



class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
      sideDrawerOpen: false
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser()
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });

  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

 
  render() {
    const { currentUser } = this.state;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (

      <div style={{ height: '100%' }}>
        {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> */}
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}


        <div>
          <BrowserRouter>
            <div>
              <header className="toolbar1">
                <nav className="toolbar__navigation">
                 
                  <div className="toolbar__toggle-button">
                  {/*  {this.drawerToggleButton()} */}
                    
                      
                   <DrawerToggleButton click={this.drawerToggleClickHandler} />

                    
                    </div>

                   <span className="tspan"></span>
                 {/* //code above gives space between Timely and edge of Toolbar */}

                  <div className="toolbar__logo">
                    <a href="/">Timely</a>
                  </div>

                  <span className="tspan"></span>
                  {/* //code above makes some space between custom logo and Timely */}
                  <img src="./images/TML.png" alt="logo" class="image1" />

                  <div className="spacer" />
                   {/* // code above spaces the navigation links on Toolbar to the far right */}
                  <div className="toolbar_navigation-items a">

                    {currentUser && (
                      <li className="nav-item">
                        <Link to={"/sales"} >
                          Sales
                  </Link>
                      </li>
                    )}

                    {currentUser && (
                      <li className="nav-item">
                        <Link to={"/addSales"} >
                          Input Sales
                  </Link>
                      </li>
                    )}

                  </div>

                  {currentUser ? (

                    <div>

                      <li className="toolbar_navigation-items a">
                        <Link to={"/profile"} >
                          {currentUser.username}
                        </Link>
                      </li>
                      <li className="toolbar_navigation-items a">
                        <a href="/landing" onClick={this.logOut}>
                          Logout
                  </a>
                      </li>

                    </div>
                  ) : (
                      <div >

                        <li className="toolbar_navigation-items a">
                          <Link to={"/login"} >
                            Login
                  </Link>
                        </li>

                        <li className="toolbar_navigation-items a">
                          <Link to={"/register"} >
                            Register
                  </Link>
                        </li>


                      </div>
                    )}
                </nav>
              </header>



              <div className="container mt-3">
                <Switch>
                  <Route path={["/", "/landing"]} exact component={Landing} />
                  <Route exact path="/login" component={Login} />
                  <Route path="/home" component={HomePage} />
                  <Route path="/sales" component={SalesPage} />
                  <Route path="/addSales" component={AddSales} />
                  <Route exact path="/register" component={Registers} />
                  <Route exact path="/profile" component={Profile} />
                  <Route component={Login} />
                </Switch>

              </div>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;


