import React from 'react';
import {
    Route,
    Link,
  } from "react-router-dom";


import Home from '../Pages/Home/Home';
import SalesPage from '../Pages/Sales/Sales';


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
            <nav><Link to="/sales">Sales</Link></nav>
            </button>
            <div>
                <Route path="/sales" component={SalesPage} />
            </div>
            </div>
    );
}