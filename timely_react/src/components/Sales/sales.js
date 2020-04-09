import React from 'react';
import '../../Styles/sales.css';
import axios from 'axios';
import authHeader from '../../Services/auth-header'


class Sales extends React.Component {

    state = {

        sunday: [
        ],
        monday: [
        ],
        tuesday: [
        ],
        wednesday: [
        ],
        thursday: [
        ],
        friday: [
        ],
        saturday: [
        ]
    }
    getSales() {
        return axios.get('http://localhost:8080/api/sales', { headers: authHeader() })
        .then(response => {
            this.setState({
                sunday: response.data,
                monday: response.data,
                tuesday: response.data,
                wednesday: response.data,
                thursday: response.data,
                friday: response.data,
                saturday: response.data
            });
        });
         }
componentDidMount() {
    this.getSales();
}


Sunday() {
        return this.state.sunday.map((sunday) => {
            const {date, dailySales, weekDay} = sunday;
            if (weekDay === "Sunday") {
            return(
                <tr>
                <td key={sunday}>
                <tr style={{fontWeight: "bolder"}}>Sunday</tr>
                    <td id="date">{date}</td>
                    <tr id="money">${dailySales.toFixed(2)}</tr>
                </td>
                </tr>
            )
            }
        })
    }


Monday() {
    return this.state.monday.map((monday) => {
        const {date, dailySales, weekDay} = monday;
        if (weekDay === "Monday") {
        return(
            <tr>
            <td key={monday}>
            <tr style={{fontWeight: "bolder"}}>Monday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales.toFixed(2)}</tr>
            </td>
            </tr>
        )
        }
    })
}

Tuesday() {
    return this.state.tuesday.map((tuesday) => {
        const {date, dailySales, weekDay} = tuesday;
        if (weekDay === "Tuesday") {
        return(
            <tr>
            <td key={tuesday}>
            <tr style={{fontWeight: "bolder"}}>Tuesday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales.toFixed(2)}</tr>
            </td>
            </tr>
        )
        }
    })
}

Wednesday() {
    return this.state.wednesday.map((wednesday) => {
        const {date, dailySales, weekDay} = wednesday;
        if (weekDay === "Wednesday") {
        return(
            <tr>
            <td key={wednesday}>
            <tr style={{fontWeight: "bolder"}}>Wednesday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales.toFixed(2)}</tr>
            </td>
            </tr>
        )
        }
    })
}
Thursday() {
    return this.state.thursday.map((thursday) => {
        const {date, dailySales, weekDay} = thursday;
        if (weekDay === "Thursday") {
        return(
            <tr>
            <td key={thursday}>
            <tr style={{fontWeight: "bolder"}}>Thursday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales.toFixed(2)}</tr>
            </td>
            </tr>
        )
        }
    })
}
Friday() {
    return this.state.friday.map((friday) => {
        const {date, dailySales, weekDay} = friday;
        if (weekDay === "Friday") {
        return(
          <tr>
            <td key={friday}>
                <tr style={{fontWeight: "bolder"}}>Friday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales.toFixed(2)}</tr>
            </td>
            </tr>
        )
        }
    })
}
Saturday() {
    return this.state.saturday.map((saturday) => {
        const {date, dailySales, weekDay} = saturday;
        if (weekDay === "Saturday") {
        return(
            <tr>
            <td key={saturday}>
            <tr style={{fontWeight: "bolder"}}>Saturday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales.toFixed(2)}</tr>
            </td>
            </tr>
        )
        }
    })
}

    render() {
       
    return (
        <div id="body">
               
           
      <br></br><br></br><br></br><br></br><br></br>
             <h1 style={{ color: "#009688" }}>Last Months Sales</h1>
             <br></br> <br></br>
            <table id='sales'>
                <tbody>
                    <tr>
                        
                    <td>{this.Sunday()}</td>

                    <td>{this.Monday()}</td>
                    
                    <td>{this.Tuesday()}</td>

                    <td>{this.Wednesday()}</td>

                    <td>{this.Thursday()}</td>

                    <td>{this.Friday()}</td>

                    <td>{this.Saturday()}</td>
                
                    </tr>
                </tbody>
            </table>
        </div>
    )
    //you can only return ONE element so by using a div, its ONE element containin MANY elements(children). Use a parent to display children when limited to using one
}
}
export default Sales;