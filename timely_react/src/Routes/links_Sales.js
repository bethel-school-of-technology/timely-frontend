import React from 'react';
import {
    Route,
    Link,
  } from "react-router-dom";


import Home from '../Pages/Home/Home';
import Schedule from '../Pages/Schedule/Schedule';
import Employees from '../Pages/Employees/Employees'


export default function SaLinks() {
    return (
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
                backgroundColor: "orange",
                width: "30%",
                fontSize: "1.5em",
                fontWeight: "bold"
            }}>
            <nav><Link to="/schedule">Schedule</Link></nav>
            </button>
            <div>
                <Route path="/schedule" component={Schedule} />
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
    );
}