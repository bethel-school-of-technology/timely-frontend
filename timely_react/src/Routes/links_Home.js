import React from 'react';
import {
    Route,
    Link,
} from "react-router-dom";
import SalesPage from '../Pages/Sales/Sales';
import AddSales from '../Pages/AddSales/AddSales';


export default function HomLinks() {
    return (


        <div> <br /> <br /> <br /> <br /> <br /> <br /><br></br><br></br>

            <h1 style={{ textAlign: 'center', color: '#009688' }}>Add Sales or Lookup Past Sales</h1> <br /> <br /> <br />




            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>

                <button className="Button4">

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

                <button className="Button5">


                    <nav><Link to="/addSales">Add Sales</Link></nav>
                </button>

                <div>
                    <Route path="/addSales" component={AddSales} />
                </div>
            </div>
        </div>
    );
}
