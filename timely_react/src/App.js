import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }
  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      <Router>
        <div>
          <header className="toolbar">
            <nav className="toolbar__navigation">
              <div className="toolbar__logo">
                <a href="/">Timely</a>
              </div>
              <span className="tspan"></span>
              <img src="./images/TML.png" alt="logo" class="image1" />
              <div className="spacer" />
              {/* <Link to={"/"} className="toolbar__logo">
            </Link>  */}
              <div className="navbar-nav mr-auto">
                <ul>
                  <li>
                    {/* <Link to={"/home"} >
                  Home
                </Link> */}
                  </li>
                  {showModeratorBoard && (
                    <li className="nav-item">
                      <Link to={"/mod"} >
                        Moderator Board
                  </Link>
                    </li>
                  )}
                  {showAdminBoard && (
                    <li className="nav-item">
                      <Link to={"/admin"} >
                        Admin Board
                  </Link>
                    </li>
                  )}
                  {currentUser && (
                    <li className="nav-item">
                      <Link to={"/user"} >
                        User
                  </Link>
                    </li>
                  )}
                </ul>
              </div>
              {currentUser ? (
                <div>
                  <ul>
                    <li className="nav-item">
                      <Link to={"/profile"} >
                        {currentUser.username}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="/login" onClick={this.logOut}>
                        LogOut
                  </a>
                    </li>
                  </ul>
                </div>
              ) : (
                  <div >
                    <ul>
                      <li className="nav-item">
                        <Link to={"/login"} >
                          Login
                  </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/register"} >
                          Register
                  </Link>
                      </li>
                    </ul>
                  </div>
                )}
            </nav>
          </header>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;