import React from 'react';


class Register extends React.Component {

    constructor(props) {
    super(props);
        this.state = {};
    }

    submitRegister(e) {

    }

    render() {
        return  <div className="root-container">
                <div className="inner-container">
                <div className="box-header">
                    Register
                </div>

        <div className="box">

        <div className="input-group">

            <label htmlFor="firstName">First Name</label>
            <input type="text" className="login-input" name="firstName" placeholder="FirstName"/>
        </div>

        <div className="input-group">

            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="login-input" name="lastName" placeholder="LastName"/>
        </div>

        <div className="input-group">

            <label htmlFor="company">Company</label>
            <input type="text" className="login-input" name="company" placeholder="Company"/>
        </div>

        <div className="input-group">

            <label htmlFor="email">Email</label>
            <input type="text" className="login-input" name="email" placeholder="Email"/>
        </div>

        <div className="input-group">
            
            <label htmlFor="password">Password</label>
            <input type="password" className="login-input" name="password" placeholder="Password"/>
        </div>

            <button
            className="login-btn"
            type="button" onCLick={this.submitRegister.bind(this)}>Register</button>

                </div>
            </div>
            </div>
    }
}
export default function RegForm() {
    return (
        <Register/>
    );
}