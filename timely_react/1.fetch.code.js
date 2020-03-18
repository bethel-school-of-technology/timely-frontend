
//Lets see if this code will have one function with 7 requests using .then statements



onPost = () => {
    fetch("http://localhost:8080/sales", 

    //Sunday
    {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify({ 
            weekDay: "Sunday", dailySales: this.state.sundaySales, date: this.state.sundayDate,
        })
    },
    //Monday
    {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify({ 
            weekDay: "Monday", dailySales: this.state.mondaySales, date: this.state.mondayDate,
        })
    },

    //Tuesday
    {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify({ 
            weekDay: "Tuesday", dailySales: this.state.tuesdaySales, date: this.state.tuesdayDate,
        })
    },

    //Wednesday
        {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ 
                weekDay: "Wednesday", dailySales: this.state.wednesdaySales, date: this.state.wednesdayDate,
            })
        },
    
    //Thursday
        {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ 
                weekDay: "Thursday", dailySales: this.state.thursdaySales, date: this.state.thursdayDate,
            })
        },

    //Friday
        {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ 
                weekDay: "Friday", dailySales: this.state.fridaySales, date: this.state.fridayDate,
            })
        },

    //Saturday
        {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ 
                weekDay: "Saturday", dailySales: this.state.saturdaySales, date: this.state.saturdayDate,
            })
        }
    
)

   .then(res => res.headers.get("authorization"))
   .then(token => {
       if (token) {
           this.setState({ ...this.state, token: token });
       } else {
           this.setState({ ...this.state, error: "Unable to input sales." });
       }
   })
}


