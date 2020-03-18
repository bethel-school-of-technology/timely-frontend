
//Lets see if this code will have one function with 7 requests using .then statements



onPost = () => {
    fetch("http://localhost:8080/sales", 

    {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify({ 
    //Sunday
            weekDay: "Sunday", dailySales: this.state.sundaySales, date: this.state.sundayDate
            },
    //Monday
            {
            weekDay: "Monday", dailySales: this.state.mondaySales, date: this.state.mondayDate
            },
    //Tuesday
            {
            weekDay: "Tuesday", dailySales: this.state.tuesdaySales, date: this.state.tuesdayDate
            },
    //Wednesday
            {
                weekDay: "Wednesday", dailySales: this.state.wednesdaySales, date: this.state.wednesdayDate
            },
    //Thursday
            {
                weekDay: "Thursday", dailySales: this.state.thursdaySales, date: this.state.thursdayDate
            },
    //Friday
            {
                weekDay: "Friday", dailySales: this.state.fridaySales, date: this.state.fridayDate
            },
    //Saturday
            {
                weekDay: "Saturday", dailySales: this.state.saturdaySales, date: this.state.saturdayDate
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
    )}
