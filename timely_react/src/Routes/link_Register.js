import React from 'react';
import { Link, Route } from 'react-router-dom';

import Register from '../Pages/Register/Register';

export default function RegLink() {
    return (
        <div className="root-container">
    <div className="inner-container">
        <div className="box">

    <button type="button" className="login-btn">
        <nav><Link to="/register">Register</Link></nav>
    </button>
    
    </div>
    <div>
    <Route path="/register" component={Register} />
        </div>
        </div>
    </div>
    );
}