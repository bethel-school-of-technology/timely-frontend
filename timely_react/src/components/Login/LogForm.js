import React from 'react';

import '../../Styles/Styles.scss';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
      }

      //API to back end
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


//prevent default stops re-rendering of page
    onSubmit = e => {
        e.preventDefault();


    const user = {
            email: this.state.email,
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

        <form onSubmit={this.onSubmit}
        className="box">

<div className="input-group">
        <label htmlFor="email">Email</label>

            <input className="login-input"
                name="email"
                placeholder="Email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"/>
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

            <button
            className="login-btn"
            type="submit" 
            onClick={this.props.onLogin}>Login</button>

                </form>
            </div>
            </div>
    }
}


export default function LogForm() {
    return (
        <Login/>
    );
}