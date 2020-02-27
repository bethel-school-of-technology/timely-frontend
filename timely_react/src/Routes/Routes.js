import React from 'react';
import { Switch, Route } from 'react-router-dom';

//routing imports
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Sales from '../Pages/Sales/Sales';
import Schedule from '../Pages/Schedule/Schedule';
import Employees from '../Pages/Employees/Employees';
import Register from '../Pages/Register/Register';


export default function Routes() {
    return <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login}  />
        

        <Route path="/home" component={Home} />
        <Route path="/employees" component={Employees} />
        <Route path="/sales" component={Sales} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/register" component={Register}/>
        <Route component={Login} />
    </Switch>
}