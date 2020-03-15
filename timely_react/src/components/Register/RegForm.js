import React from 'react';
import { Link } from 'react-router-dom';

class RegForm extends React.Component {

    constructor() {
        super();
        this.state = {
            firsT_Name: "",
            lastName: "",
            username: "",
            company: "",
            email: "",
            password: "",
            errors: {}
        };
    }

    onRegister = () => {
        fetch("http://localhost:8080/api/user/register", {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ 
                firstName: this.state.firsT_Name, 
                lastName: this.state.lastName,
                username: this.state.username,
                company: this.state.company,
                email: this.state.email,
                password: this.state.password 
                 })
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
    onSubmit = s => {
        s.preventDefault();


        const newUser = {
            firsT_Name: this.state.firsT_Name,
            lastName: this.state.lastName,
            username: this.state.username,
            company: this.state.company,
            email: this.state.email,
            password: this.state.password,
        };

        console.log(newUser);
    };

    render() {
        const { errors } = this.state;
        return <div className="root-container">
            <div className="inner-container">
                <div className="box-header">
                    Register
                </div>

                <form onSubmit={this.onSubmit}
                    className="box">

                    <div className="input-group">
                        <label htmlFor="firsT_Name">First Name</label>

                        <input className="login-input"
                            name="firsT_Name"
                            placeholder="First Name"
                            onChange={this.onChange}
                            value={this.state.firsT_Name}
                            error={errors.firsT_Name}
                            id="firsT_Name"
                            type="text"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>

                        <input className="login-input"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={this.onChange}
                            value={this.state.lastName}
                            error={errors.lastName}
                            id="lastName"
                            type="text"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>

                        <input className="login-input"
                            name="username"
                            placeholder="Username"
                            onChange={this.onChange}
                            value={this.state.username}
                            error={errors.username}
                            id="username"
                            type="text"
                        />
                    </div>


                    <div className="input-group">
                        <label htmlFor="email">Email</label>

                        <input className="login-input"
                            name="email"
                            placeholder="Email"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email" />
                    </div>


                    <div className="input-group">
                        <label htmlFor="company">Company</label>

                        <input className="login-input"
                            name="company"
                            placeholder="Company"
                            onChange={this.onChange}
                            value={this.state.company}
                            error={errors.company}
                            id="company"
                            type="text" />
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
                            type="password" />
                    </div>

                    <Link to="/login" className="login-btn"><button
                        className="login-btn"
                        type="submit" onClick={this.onRegister}>Register</button></Link>

                </form>
            </div>
        </div>
    }
}
export default RegForm;