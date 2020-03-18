   //when submit is hit, this function is called which calls all the functions to enter data for each day of the week -Rebekah
   onClick = () => {
    this.onPostSun();
    this.onPostMon();
    this.onPostTue();
    this.onPostWed();
    this.onPostThu();
    this.onPostFri();
    this.onPostSat();
}
//this function assigns the data from the state properties to fields on the database's sales model(weekDay, dailySales, etc)...I think :) -Rebekah
onPostSun = () => {
    //should we try putting all 7 fetch requests in one onPost function? -Rebekah
    fetch("http://localhost:8080/sales", {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify({ 
            weekDay: "Sunday", dailySales: this.state.sundaySales, date: this.state.sundayDate,
        })
})
   .then(res => res.headers.get("authorization"))
   .then(token => {
       if (token) {
           this.setState({ ...this.state, token: token });
       } else {
           this.setState({ ...this.state, error: "Unable to input sales." });
       }
   });
}
onPostMon = () => {
    fetch("http://localhost:8080/sales", {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify({ 
            weekDay: "Monday", dailySales: this.state.mondaySales, date: this.state.mondayDate,
        })
})
   .then(res => res.headers.get("authorization"))
   .then(token => {
       if (token) {
           this.setState({ ...this.state, token: token });
       } else {
           this.setState({ ...this.state, error: "Unable to input sales." });
       }
   });
}
onPostTue = () => {
fetch("http://localhost:8080/sales", {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify({ 
        weekDay: "Tuesday", dailySales: this.state.tuesdaySales, date: this.state.tuesdayDate,
    })
})
.then(res => res.headers.get("authorization"))
.then(token => {
   if (token) {
       this.setState({ ...this.state, token: token });
   } else {
       this.setState({ ...this.state, error: "Unable to input sales." });
   }
});
}
onPostWed = () => {
fetch("http://localhost:8080/sales", {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify({ 
        weekDay: "Wednesday", dailySales: this.state.wednesdaySales, date: this.state.wednesdayDate,
    })
})
.then(res => res.headers.get("authorization"))
.then(token => {
   if (token) {
       this.setState({ ...this.state, token: token });
   } else {
       this.setState({ ...this.state, error: "Unable to input sales." });
   }
});
}
onPostThu = () => {
fetch("http://localhost:8080/sales", {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify({ 
        weekDay: "Thursday", dailySales: this.state.thursdaySales, date: this.state.thursdayDate,
    })
})
.then(res => res.headers.get("authorization"))
.then(token => {
   if (token) {
       this.setState({ ...this.state, token: token });
   } else {
       this.setState({ ...this.state, error: "Unable to input sales." });
   }
});
}
onPostFri = () => {
fetch("http://localhost:8080/sales", {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify({ 
        weekDay: "Friday", dailySales: this.state.fridaySales, date: this.state.fridayDate,
    })
})
.then(res => res.headers.get("authorization"))
.then(token => {
   if (token) {
       this.setState({ ...this.state, token: token });
   } else {
       this.setState({ ...this.state, error: "Unable to input sales." });
   }
});
}
onPostSat = () => {
fetch("http://localhost:8080/sales", {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify({ 
        weekDay: "Saturday", dailySales: this.state.saturdaySales, date: this.state.saturdayDate,
    })
})
.then(res => res.headers.get("authorization"))
.then(token => {
   if (token) {
       this.setState({ ...this.state, token: token });
   } else {
       this.setState({ ...this.state, error: "Unable to input sales." });
   }
});
}