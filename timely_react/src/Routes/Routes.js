import React from 'react';
import { Switch, Route } from 'react-router-dom';

//routing imports
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Sales from '../Pages/Sales/Sales';
import Schedule from '../Pages/Schedule/Schedule';
import Employees from '../Pages/Employees/Employees';
import Signup from '../Pages/Signup/Signup';


export default function Routes() {
    return <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        

        <Route path="/home" component={Home} />
        <Route path="/employees" component={Employees} />
        <Route path="/sales" component={Sales} />
        <Route path="/schedule" component={Schedule} />
        <Route component={Login} />
    </Switch>
}