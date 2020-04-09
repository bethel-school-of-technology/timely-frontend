import React from 'react';
import { Switch, Route } from 'react-router-dom';

//routing imports
import Login from "../components/Login/login.component";
import HomePage from '../Pages/Home/Home';
import SalesPage from '../Pages/Sales/Sales';
import AddSales from '../Pages/AddSales/AddSales';
import Registers from "../components/Register/register.component";
import Landing from '../Pages/Landing/Landing';
import Profile from '../components/Profile/profile.component';
import AuthService from "../Services/auth.service";

export default function Routes() {
    return <Switch>
        <Route path="/" exact component={Landing} />
        <Route exact path="/login" component={Login} />


        <Route path="/home" component={HomePage} />
        <Route path="/sales" component={SalesPage} />
        <Route path="/addSales" component={AddSales} />
        <Route exact path="/register" component={Registers} />
        <Route exact path="/profile" component={Profile} />
        <Route component={Login} />
    </Switch>
}