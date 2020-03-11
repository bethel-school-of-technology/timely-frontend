import React from 'react';

import { Link, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';

import '../../Styles/Styles.scss';

class Login extends React.Component {

//properties being passed to the backend
//token for authorization, username and password for verification to recieve a token
    constructor() {
        super();
        this.state = {
          token: "",
          username: "",
          password: "",
          errors: {}
        };
      }

    //API to back end initiated by the onLogin function
      onLogin = () => {
          fetch("http://localhost:8080/login", {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
            })
            .then(res => res.headers.get("authorization"))
            .then(token => {
              if (token) {
                this.setState({ ...this.state, token: token });
              } else {
                this.setState({ ...this.state, error: "Unable to login with username and password." });
              }
            });
          }


//onChange ties in the form values to the components state
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };


//prevent default stops re-rendering of page//
    onSubmit = e => {
        e.preventDefault();



// User is only for console log. doesnt really go anywhere except testing
    const user = {
            username: this.state.username,
            password: this.state.password,
          };

    console.log(user);
        };



        render() {
            const { errors } = this.state;
        return  <div className="root-container">
                <div className="inner-container">
                <div className="box-header">
                    Register
                </div>


    {(!this.state.token || this.state.token === "")
        ? (
//here is where i believe the token should go saying IF the token is empty, render the form
        <form onSubmit={this.onSubmit}
        className="box">

<div className="input-group">
        <label htmlFor="username">Username</label>

            <input className="login-input"
                name="username"
                placeholder="Username"
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"/>
              </div>


    <div className="input-group">
        <label htmlFor="password">Create Password</label>

            <input className="login-input"
                name="password"
                placeholder="Create Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"/>
              </div>

            <Link to="/home" className="login-btn"><button
            type="submit" 
            onClick={this.props.onLogin}>Login</button></Link>
                </form>

//here is where (I HOPE) it is saying, if the token matches, then render the Home page

//ISSUE--- it will auto direct you to the home path.
//We need to make it authorized routing. not auto routing
        ):(<Link><Route path="/Home" component={Home} /></Link>)}
            </div>
            </div>
    }
}


export default function LogForm() {
    return (
        <Login/>
    );
}