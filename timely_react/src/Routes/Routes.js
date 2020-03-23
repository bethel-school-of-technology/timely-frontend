import React from 'react';
import { Switch, Route } from 'react-router-dom';

//routing imports
import Login from '../Pages/Login/Login';
import HomePage from '../Pages/Home/Home';
import SalesPage from '../Pages/Sales/Sales';
import AddSales from '../Pages/AddSales/AddSales';
import Register from '../Pages/Register/Register';
import Toolbar from '../components/Toolbar/Toolbar';

export default function Routes() {
    return <Switch>
        <Route path="/" exact component={Toolbar} />
        <Route path="/login" component={Login}  />
        
        
        <Route path="/home" component={HomePage} />
        <Route path="/sales" component={SalesPage} />
        <Route path="/addSales" component={AddSales} />
        <Route path="/register" component={Register}/>
        <Route component={Login} />
    </Switch>
}