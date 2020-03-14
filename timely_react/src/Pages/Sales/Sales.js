import React from 'react';

import Sales from '../../components/Sales/sales';



class SalesPage extends React.Component {
    render() {
    return (
        <div>
        <Sales uri="http://localhost:8080/sales"/>
        </div>
    );
    }
}

export default SalesPage;