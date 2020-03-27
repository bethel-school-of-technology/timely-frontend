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
        <form>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
            <button
             className="Button6">
              
            <nav><Link to="/sales">Sales Page</Link></nav>
            </button>
            <div>
                
            <Route path="/sales" component={SalesPage} />
           
            </div>
            </div>
        
        </form> 
           <br></br><br></br><br></br>
            </div>   


        );
    }
}


export default AddSales;