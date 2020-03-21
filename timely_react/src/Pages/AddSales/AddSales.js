import React from 'react';

import {
    Route,
    Link,
  } from "react-router-dom";


import '../../Styles/Styles.scss';
import SalesPage from '../Sales/Sales';

import SalesForm from '../../components/SalesForm/SalesForm';



class AddSales extends React.Component{
    
    render(){
        return (
        <div>
            <div>
            <SalesForm/>
            </div>
<br></br>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
            <button style={{
                fontSize: "1em",
                fontWeight: "bold",
                width:"37%",
                height: "auto",
                backgroundColor: "lightgreen",
                border: "2.5px solid grey",
                cursor: "pointer"
            }}>
            <nav><Link to="/sales">Sales Page</Link></nav>
            </button>
            <div>
            <Route path="/sales" component={SalesPage} />
            </div>
            </div>
            </div>  
        );
    }
}


export default AddSales;