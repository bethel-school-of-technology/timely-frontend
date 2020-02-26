import React from 'react';
import {
    Route,
    Link,
  } from "react-router-dom";


import Sales from '../Pages/Sales/Sales';
import Schedule from '../Pages/Schedule/Schedule';
import Employees from '../Pages/Employees/Employees'


export default function HomLinks() {
    return (
        <div>

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>

            <button style={{
                fontSize: "3em",
                width:"90%",
                height: "30%",
                borderRadius: "12px",
                backgroundColor: "lightgreen",
                border: "4px solid grey",
            }}>
            <nav><Link to="/sales">Sales</Link></nav>
            </button>
            <div>
            <Route path="/sales" component={Sales} />
            </div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
            <button style={{
                fontSize: "3em",
                width:"90%",
                height: "30%",
                borderRadius: "12px",
                backgroundColor: "orange",
                border: "4px solid grey",
            }}>
            <nav><Link to="/schedule">Schedule</Link></nav>
            </button> 
            <div>
            <Route path="/schedule" component={Schedule} />
            </div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
            <button style={{
                fontSize: "3em",
                width:"90%",
                borderRadius: "12px",
                backgroundColor: "lightblue",
                border: "4px solid grey",
            }}>
            <nav><Link to="/employees">Employees</Link></nav>
            </button>
            <div>
            <Route path="/employees" component={Employees} />
            </div>
        </div>
    </div>
    );
}