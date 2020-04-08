import React from 'react';
import '../../Styles/sales.css';



class AverageSales extends React.Component {

    state = {

        average: [
            {
                date: "2020-14-3", dailySales: 23456,
                weekDay: "Sunday"
            },
            {
                date: "2020-18-3", dailySales: 6785,
                weekDay: "Monday"
            },
            {
                date: "2020-14-3", dailySales: 2345678,
                weekDay: "Tuesday"
            },
            {
                date: "2020-18-3", dailySales: 456789,
                weekDay: "Wednesday"
            },
            {
                date: "2020-18-3", dailySales: 6785,
                weekDay: "Thursday"
            },
            {
                date: "2020-14-3", dailySales: 2345678,
                weekDay: "Friday"
            },
            {
                date: "2020-18-3", dailySales: 456789,
                weekDay: "Saturday"
            }
        ],
        labor: { value: 0 },
    }

    Average() {
        return this.state.average.map((average) => {
            const { date, dailySales, weekDay } = average;
            return (
                <td>
                    <td key={average}>
                        <tr style={{ fontWeight: "bolder" }}>{weekDay}</tr>
                        <tr id="date">{date}</tr>
                        <tr id="money">${dailySales}</tr>
                    </td>
                </td>
            )
        })
    }
    updateInput = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    LaborCost() {
        return this.state.average.map((average) => {
            const { date, dailySales, weekDay } = average;
            var result = dailySales / 100;
            var labor = this.state.labor;
            return (
                <td>
                    <td key={average}>
                        <tr style={{ fontWeight: "bolder" }}>{weekDay}</tr>
                        <tr id="date">{date}</tr>
                        <tr id="money">${result * labor}</tr>
                    </td>
                </td>
            )
        })
    }

    render() {

        return (
            <div>
                <div id="body">
                    <h1 id="title">Sales Forecast</h1>
                    <table id="sales">
                        <tbody>
                            <tr>{this.Average()}</tr>
                        </tbody>
                    </table>
                </div>
                <div id="body">
                    <h1 id="title">Estimated Labor Cost</h1>
                    <table id="sales">
                        <tbody>
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
        //you can only return ONE element so by using a div, its ONE element containin MANY elements(children). Use a parent to display children when limited to using one
    }
}
export default AverageSales;