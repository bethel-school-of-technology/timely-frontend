import React from 'react';
import {
    Route,
    Link,
  } from "react-router-dom";


import '../Styles/Styles.scss';
import AddSales from '../Pages/AddSales/AddSales';


export default function SaLinks() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>

        <button style={{
            fontSize: "1.5em",
            width:"50%",
            height: "auto",
            borderRadius: "12px",
            backgroundColor: "lightgreen",
            border: "4px solid grey",
            position: "fixed",
            bottom: 0
            }}>
            <nav><Link to="/addSales">Input Past Sales</Link></nav>
            </button>
            <div>
                <Route path="/addSales" component={AddSales} />
            </div>
            </div>
    );
}