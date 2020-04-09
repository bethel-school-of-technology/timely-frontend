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
                <Link to="/addSales"><button className="Button7">

                    <nav>Input Past Sales</nav>

                </button></Link>
                    
                <div>
                    <Route path="/addSales" component={AddSales} />
                </div>
                <br></br><br></br> <br></br><br></br>
            </form>
            
        </div>
    );
}