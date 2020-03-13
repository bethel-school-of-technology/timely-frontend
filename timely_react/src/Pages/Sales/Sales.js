import React from 'react';

import Sales from '../../components/Sales/sales';
import SaLinks from '../../Routes/links_Sales';



export default function SalesPage() {
    return (
        <div>
        <SaLinks/>
        <Sales uri="http://localhost:8080/sales"/>
        </div>
    );
}