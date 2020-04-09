import React from 'react';
import '../../Styles/sales.css';
import axios from 'axios';
import authHeader from '../../Services/auth-header';



class AverageSales extends React.Component {

    state = {
        sales: [],
        average: [
            {
                dailySales: 23456,
                weekDay: "Sunday"
            },
            {
                dailySales: 6785,
                weekDay: "Monday"
            },
            {
                dailySales: 2345678,
                weekDay: "Tuesday"
            },
            {
                dailySales: 456789,
                weekDay: "Wednesday"
            },
            {
                dailySales: 6785,
                weekDay: "Thursday"
            },
            {
                dailySales: 2345678,
                weekDay: "Friday"
            },
            {
                dailySales: 456789,
                weekDay: "Saturday"
            }
        ],
        labor: { value: 0 },
    }

    removeDuplicates(array) {
        let averageArray = array.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return averageArray
    }

    getEstimatedSales() {
        return axios.get('http://localhost:8080/api/estimate', { headers: authHeader() }).then((response) => this.setState({ sales: this.removeDuplicates(response.data) }));
    }
    componentDidMount() {
        this.getEstimatedSales();
    }

    Week() {
        return this.state.average.map((average) => {
            const { weekDay } = average;
            return (
                <td>
                    <td key={average}>
                        <tr style={{ fontWeight: "bolder" }}>{weekDay}</tr>
                    </td>
                </td>
            )
        })
    }
    Average() {
        return this.state.sales.slice(0).reverse().map((sales) => {
            return (
                <td>
                    <td key={sales}>
                        <tr id="money">${sales.toFixed(2)}</tr>
                    </td>
                </td>
            )
        })
    }
    updateInput = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    LaborCost() {
        return this.state.sales.slice(0).reverse().map((sales) => {
            var result = sales / 100;
            var labor = this.state.labor;
            return (
                <td>
                    <td key={sales}>
                        <tr id="money">${((result * labor).toFixed(2))
                        }</tr>
                    </td>
                </td>
            )
        })
    }

    render() {
        console.log(this.state.sales);
        return (
            <div>
                <div id="body">
                    <h1 id="title">Sales Forecast</h1>
                    <table id="sales">
                        <tbody>
                            <tr>{this.Week()}</tr>
                            <tr>{this.Average()}</tr>
                        </tbody>
                    </table>
                </div>
                <div id="body">
                    <br></br><br></br>
                    <h1 id="title">Estimated Labor Cost</h1>
                    <table id="sales">
                        <tbody>
                            <tr>{this.Week()}</tr>
                            <tr>{this.LaborCost()}</tr>
                        </tbody>
                    </table>
                    <input type="number" placeholder="Labor Cost Percentage"
                        value={this.state.labor}
                        id="labor"
                        onChange={this.updateInput} />
                    <br /><br />

                </div>
            </div>

        )
    }
}
export default AverageSales;