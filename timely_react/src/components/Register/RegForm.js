import React from 'react';


class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            password: "",
            errors: {}
        };
    }

    onRegister = () => {
        fetch("http://localhost:8080/register", {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName })
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
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
                        <label htmlFor="firstName">First Name</label>

                        <input className="login-input"
                            name="firstName"
                            placeholder="First Name"
                            onChange={this.onChange}
                            value={this.state.firstName}
                            error={errors.firstName}
                            id="firstName"
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

                    <button
                        className="login-btn"
                        type="submit">Register</button>

                </form>
            </div>
        </div>
    }
}
export default function RegForm() {
    return (
        <Register />
    );
}