import React from 'react';
import {
    Route,
    Link,
  } from "react-router-dom";


import SalesPage from '../Pages/Sales/Sales';
import AddSales from '../Pages/AddSales/AddSales';


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
            <Route path="/sales" component={SalesPage} />
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

            <nav><Link to="/addSales">Add Sales</Link></nav>
            </button> 
            <div>
            <Route path="/addSales" component={AddSales} />
            </div>
        </div>
    </div>
    );
}