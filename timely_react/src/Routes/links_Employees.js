import React from 'react';
import {
    Route,
    Link,
  } from "react-router-dom";


import Sales from '../Pages/Sales/Sales';
import Schedule from '../Pages/Schedule/Schedule';
import Home from '../Pages/Home/Home';


export default function EmpLinks() {
    return (
        //this is the header styling//
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
        </div>
    );
}