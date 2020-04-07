import React from 'react';

import AverageSales from '../../components/AverageSales/AverageSales';
import SaLinks from '../../Routes/links_Sales';
import Sales from '../../components/Sales/sales';



class SalesPage extends React.Component {
    render() {
    return (
        <div>
            <AverageSales/>
        <Sales uri="http://localhost:8080/sales"/>
        <SaLinks/>
            </div>
    );
    }
}

export default SalesPage;