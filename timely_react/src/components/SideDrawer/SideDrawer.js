import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Landing from '../../Pages/Landing/Landing';
import SalesPage from '../../Pages/Sales/Sales';
import AddSales from "../../Pages/AddSales/AddSales";
import Registers from "../../components/Register/register.component";
import Login from "../../components/Login/login.component";
import Profile from "../../Pages/Profile/ProfilePage";
import HomePage from "../../Routes/links_Home";

import './SideDrawer.css';
import AuthService from '../../Services/auth.service';


class SideDrawer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: undefined
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: AuthService.getCurrentUser()
            });
        }
    }
    logOut() {
        AuthService.logout();
    }
    render() {
        const { currentUser } = this.state;
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }
        return (
                <nav className={drawerClasses}>

                    <ul>
                        {currentUser && (
                            <li>
                            <a href="/sales" >
                                Sales
</a>
                        </li>
                        )}

                        {currentUser && (
                            <li>
                                <a href="/addSales">
                                    Input Sales
                    </a>
                            </li>
                        )}
                        {currentUser ? (
                            <div>

<li>
                                        <a href="/profile" >
                                            {currentUser.username}
</a>
                                    </li>
                                <li>
                                    <a href="/landing" onClick={this.logOut}>
                                        Logout
</a>
                                </li>
                                </div>

                        ) : (
                            <div>

<li>
                                        <a href="/login" >
                                            Login
</a>
                                    </li>

                                    <li>
                                        <a href="/register" >
                                            Register
</a>
                                    </li>
                                    </div>)}

                    </ul>
                    
                </nav>
        );
    }
};

export default SideDrawer;
