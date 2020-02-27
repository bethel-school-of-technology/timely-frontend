import React from 'react';
import { Link, Route } from 'react-router-dom';

import Login from '../Pages/Login/Login';

export default function LogLink() {
    return (
        <div className="root-container">
    <div className="inner-container">
        <div className="box">

    <button type="button" className="login-btn">
    <nav><Link to="/login">Login</Link></nav>
    </button>

    </div>
        <div>
    <Route path="/login" component={Login} />
        </div>
        </div>
    </div>
    );
}