import React from 'react';
import {
    Route,
    Link,
  } from "react-router-dom";


import Sales from '../Pages/Sales/Sales';
import Home from '../Pages/Home/Home';
import Employees from '../Pages/Employees/Employees'


export default function ScLinks() {
    return (
        <header>
            <div style={{
                backgroundColor: "darkgray",
                display: "flex",
                justifyContent: "space-around",
                height: "35px"
            }}>

            
            <button style={{
                backgroundColor: "lightblue",
                width: "30%",
                fontSize: "1.5em",
                fontWeight: "bold"
            }}>
            <nav><Link to="/home">Home</Link></nav>
            </button>
            <div>
                <Route path="/home" component={Home} />
            </div>

            <button style={{
                backgroundColor: "lightgreen",
                width: "30%",
                fontSize: "1.5em",
                fontWeight: "bold"
            }}>
                <nav><Link to="/sales">Sales</Link></nav>
            </button>
            <div>
                <Route path="/sales" component={Sales} />
            </div>

            <button style={{
                backgroundColor: "skyblue",
                width: "30%",
                fontSize: "1.5em",
                fontWeight: "bold"
            }}>
            <nav><Link to="/employees">Employees</Link></nav>
            </button>
            <div>
                <Route path="/employees" component={Employees} />
            </div>
            </div>
        </header>
    );
}