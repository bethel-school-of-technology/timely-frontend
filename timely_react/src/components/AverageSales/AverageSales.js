import React from 'react';
import '../../Styles/sales.css';
import axios from 'axios';


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
        ]
    }

Average() {
        return this.state.average.map((average) => {
            const {date, dailySales, weekDay} = average;
            return(
                <td>
                <td key={average}>
                <tr style={{fontWeight: "bolder"}}>{weekDay}</tr>
                    <tr id="date">{date}</tr>
                    <tr id="money">${dailySales}</tr>
                </td>
                </td>
            )
        })
    }


    render() {
       
    return (
        <div id="body">
            <h1 id="title">Sales Forecast</h1>
            <table id="sales">
                <tbody>
                    <td>{this.Average()}</td>

                </tbody>
            </table>
        </div>
    )
    //you can only return ONE element so by using a div, its ONE element containin MANY elements(children). Use a parent to display children when limited to using one
}
}
export default AverageSales;