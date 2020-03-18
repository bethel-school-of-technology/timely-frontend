
//the state will be an array of data

fetchSalesData = () => {
var encodedURI = window.encodeURI(this.props.uri);
//encoded URI deciphers characters as literal
//inside the propery of window, you can specify web address but props.uri allows ANY web address to be passed and rendered. *always allow components to be multi-useful
    return axios.get(encodedURI).then(response => {
        //grab the encodedURI variable assign is value of response
        this.setState( () => { 
        //re-SET the value of salesData to the values of the response 
            return { salesData: response.data};
        });
    });
};

//this happens only after the component is mounted to the DOM
componentDidMount() {
    this.fetchSalesData();
    //this calls the fuction
}
render() {
    console.log(this.state.salesData);

    if (this.state.salesData.length === 0) {
        return (<div>Failed to fetch Data from server</div>)
        // JSX translated HTML with javascript and handles such cases
        //using () prioritizes the values within before anything else in the process of the code* in this case, it's the return method
    }

    const sales =  this.state.salesData.map(sales => (
    //map function assigns a function to EACH value to the property it receives
    //in this case, sales is the function name which will render a div for each date for monday, and em for each sale for that monday

    //Here it SHOULD display the date for each monday
    <div key={sales.monday.date}>
{
//This is where it will display the daily sale of mondays
}
<em>{sales.monday.daily_sales}</em>
    </div>
));


//giving a key helps categorize what you're asking react to do
return <div>{sales}</div>
}
//you can only return ONE element so by using a div, its ONE element containin MANY elements(children). Use a parent to display children when limited to using one
