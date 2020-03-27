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
         <form>  
             <br></br> 
        <button className="Button7">
            
            <nav><Link to="/addSales">Input Past Sales</Link></nav>
            
            </button>
            
            <div>
                <Route path="/addSales" component={AddSales} />
            </div>
            <br></br><br></br> <br></br><br></br>
            </form>   
           
            </div>
    );
}