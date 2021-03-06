import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
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
// code above sets the initial state to sidedrawer open to false.
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
  //  code above passing a function sets the previous state as an argument, and returns object which updates the state, and now
  //  set sidedrawer open to opposite of previous state of the sidedraweropen.  If side drawer was open, or true,
  //   it will now be saved as false, and other way around
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
// code above will always close it. and it is passed to backdrop component and pointing to backdrop click handler. 

  render() {
    const { currentUser } = this.state;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    // above code, if sidedrawer is open backdrop shows.
    return (

      <div style={{ height: '100%' }}>
        {/* //code (above) is giving the sidedrawer a height of 100% of the page. */}

        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
       {/* // code (above) is true or false.  */}

        <div>
          <BrowserRouter>
            <div>
              <header className="toolbar1">
                <nav className="toolbar__navigation">

                  <div className="toolbar__toggle-button">



                    <DrawerToggleButton click={this.drawerToggleClickHandler} />


                  </div>

                  <span className="tspan"></span>
                  {/* //code above gives space between Timely and edge of Toolbar */}

                  <div className="toolbar__logo">
                    <a href="/">Timely</a>
                  </div>
                  {/* // href  (above) is Hypertext reference used to create a link to another page.  Attribute to the anchor tag */}

                  <span className="tspan"></span>
                  {/* //code above makes some space between custom logo and Timely */}

                  <img src="./images/TML.png" alt="logo" class="image1" />

                  <div className="spacer" />
                  {/* // code above spaces the navigation links on Toolbar to the far right.  It takes all the free space between
                  the logo and the navigation items. */}

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


