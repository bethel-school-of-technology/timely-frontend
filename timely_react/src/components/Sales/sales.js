import React from 'react';
import '../../Styles/sales.css';
import userService from '../../Services/user.service';


class Sales extends React.Component {

    state = {

        sunday: [
            {
                date: "2020-14-3", dailySales: 23456,
                weekDay: "Sunday"
            },
            {
                date: "2020-18-3", dailySales: 6785,
                weekDay: "Sunday"
            },
            {
                date: "2020-14-3", dailySales: 2345678,
                weekDay: "Sunday"
            },
            {
                date: "2020-18-3", dailySales: 456789,
                weekDay: "Sunday"
            }
        ],
        monday: [
            {
                date: "2020-12-14", dailySales: 3466, weekDay: "Monday"
            },
            {
                date: "2020-10-3", dailySales: 984567,
                weekDay: "Monday"
            },
            {
                date: "2020-12-14", dailySales: 2345678, weekDay: "Monday"
            },
            {
                date: "2020-10-3", dailySales: 87654,
                weekDay: "Monday"
            }
        ],
        tuesday: [
            {
                date:"2020-13-3", dailySales: 34756,
                weekDay: "Tuesday"
            },
            {
                date: "2020-19-3", dailySales: 5797,
                weekDay: "Tuesday"
            },
            {
                date:"2020-13-3", dailySales: 834604,
                weekDay: "Tuesday"
            },
            {
                date: "2020-19-3", dailySales: 6824684,
                weekDay: "Tuesday"
            }
        ],
        wednesday: [
            {
                date: "2020-14-3", dailySales: 23456,
                weekDay: "Wednesday"
            },
            {
                date: "2020-18-3", dailySales: 65489,
                weekDay: "Wednesday"
            },
            {
                date: "2020-14-3", dailySales: 518965,
                weekDay: "Wednesday"
            },
            {
                date: "2020-18-3", dailySales: 6785,
                weekDay: "Wednesday"
            }
        ],
        thursday: [
            {
                date: "2020-14-3", dailySales: 23456,
                weekDay: "Thursday"
            },
            {
                date: "2020-18-3", dailySales: 6785,
                weekDay: "Thursday"
            },
            {
                date: "2020-14-3", dailySales: 9478,
                weekDay: "Thursday"
            },
            {
                date: "2020-18-3", dailySales: 15199,
                weekDay: "Thursday"
            }
        ],
        friday: [
            {
                date: "2020-14-3", dailySales: 23456,
                weekDay: "Friday"
            },
            {
                date: "2020-18-3", dailySales: 6785,
                weekDay: "Friday"
            },
            {
                date: "2020-14-3", dailySales: 2365,
                weekDay: "Friday"
            },
            {
                date: "2020-18-3", dailySales: 88855,
                weekDay: "Friday"
            }
        ],
        saturday: [
            {
                date: "2020-14-3", dailySales: 23456,
                weekDay: "Saturday"
            },
            {
                date: "2020-18-3", dailySales: 6785,
                weekDay: "Saturday"
            },
            {
                date: "2020-14-3", dailySales: 85265,
                weekDay: "Saturday"
            },
            {
                date: "2020-18-3", dailySales: 798455,
                weekDay: "Saturday"
            }
        ]
    }

componentDidMount() {
    userService.getEstimatedSales();
    userService.getSales();
}


Sunday() {
        return this.state.sunday.map((sunday) => {
            const {date, dailySales} = sunday;
            return(
                <tr>
                <td key={sunday}>
                <tr style={{fontWeight: "bolder"}}>Sunday</tr>
                    <td id="date">{date}</td>
                    <tr id="money">${dailySales}</tr>
                </td>
                </tr>
            )
        })
    }


Monday() {
    return this.state.monday.map((monday) => {
        const {date, dailySales} = monday;
        return(
            <tr>
            <td key={monday}>
            <tr style={{fontWeight: "bolder"}}>Monday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales}</tr>
            </td>
            </tr>
        )
    })
}

Tuesday() {
    return this.state.tuesday.map((tuesday) => {
        const {date, dailySales} = tuesday;
        return(
            <tr>
            <td key={tuesday}>
            <tr style={{fontWeight: "bolder"}}>Tuesday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales}</tr>
            </td>
            </tr>
        )
    })
}

Wednesday() {
    return this.state.wednesday.map((wednesday) => {
        const {date, dailySales} = wednesday;
        return(
            <tr>
            <td key={wednesday}>
            <tr style={{fontWeight: "bolder"}}>Wednesday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales}</tr>
            </td>
            </tr>
        )
    })
}
Thursday() {
    return this.state.thursday.map((thursday) => {
        const {date, dailySales} = thursday;
        return(
            <tr>
            <td key={thursday}>
            <tr style={{fontWeight: "bolder"}}>Thursday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales}</tr>
            </td>
            </tr>
        )
    })
}
Friday() {
    return this.state.friday.map((friday) => {
        const {date, dailySales} = friday;
        return(
          <tr>
            <td key={friday}>
                <tr style={{fontWeight: "bolder"}}>friday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales}</tr>
            </td>
            </tr>
        )
    })
}
Saturday() {
    return this.state.saturday.map((saturday) => {
        const {date, dailySales} = saturday;
        return(
            <tr>
            <td key={saturday}>
            <tr style={{fontWeight: "bolder"}}>Saturday</tr>
                <td id="date">{date}</td>
                <tr id="money">${dailySales}</tr>
            </td>
            </tr>
        )
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