import React from 'react';
import '../../Styles/Styles.scss';

class Login extends React.Component {

    constructor(props) {
    super(props);
        this.state = {};
    }

    submitLogin(e) {
        
    }

    render() {
        return  <div className="root-container">
                <div className="inner-container">
                <div className="box-header">
                Login
                </div>
    <div className="box">

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
            type="button" onCLick={this.submitLogin.bind(this)}>Login</button>

        </div>
        </div>
    </div>
    }
}


export default function LogForm() {
    return (
        <Login/>
    );
}
