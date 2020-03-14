import React from 'react';

class SalesForm extends React.Component {

    constructor() {
        super();
        this.state = {

            //there must be a way to create a sales holding each day of week holding values but console log wouldnt display.
            sundaySales: "",
            sundayDate: "",

            mondaySales: "",
            mondayDate: "",

            tuesdaySales: "",
            tuesdayDate: "",

            wednesdaySales: "",
            wednesdayDate: "",

            thursdaySales: "",
            thursdayDate: "",

            fridaySales: "",
            fridayDate: "",

            saturdaySales: "",
            saturdayDate: "",
        errors: {}
        }
    };

    onPost = () => {
        fetch("http://localhost:8080/api/user/sales", {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ 


                //READ THIS COMMENT PLEASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//not sure how to export the data. there are 7 states, each holding two properties.
                sales: this.state
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


//onChange ties in the form values to the components state
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };


//prevent default stops re-rendering of page
    onSubmit = s => {
        s.preventDefault();


        const newSales = {
            sundaySales: this.state.sundaySales,
            sundayDate: this.state.sundayDate,

            mondaySales: this.state.mondaySales,
            mondayDate: this.state.mondayDate,

            tuesdaySales:this.state.tuesdaySales,
            tuesdayDate: this.state.tuesdayDate,

            wednesdaySales: this.state.wednesdaySales,
            wednesdayDate: this.state.wednesdayDate,

            thursdaySales: this.state.thursdaySales,
            thursdayDate: this.state.thursdayDate,

            fridaySales: this.state.fridaySales,
            fridayDate: this.state.fridayDate,

            saturdaySales: this.state.saturdaySales,
            saturdayDate: this.state.saturdayDate,

        };

        console.log(newSales);
    };

    render() {
        const { errors } = this.state;
        return <div className="root-container">
            <h1>
            Input Weekly Sales
        </h1>
        <br></br>
            <div className="inner-container">
                <div className="box-header">
                </div>

                <form onSubmit={this.onSubmit}
                    className="box">


{
    //sunday sales
}
                    <div className="input-group">
                        <label htmlFor="sunday">Sunday's Sales</label>

                        <input className="login-input"
                            name="sunday"
                            placeholder="Sunday's Sales"
                            onChange={this.onChange}
                            value={this.state.sundaySales}

                            //error={errors.sunday.sales}

                            id="sundaySales"
                            type="number"
                        />

                        <input className="login-input"
                            name="sunday"
                            onChange={this.onChange}
                            value={this.state.sundayDate}

                            //error={errors.date}
                            
                            id="sundayDate"
                            type="date"
                            />
                    </div>

{
//mondays Sales
}
                    <div className="input-group">
                        <label htmlFor="monday">Monday's Sales</label>

                        <input className="login-input"
                            name="monday"
                            placeholder="Monday Sales"
                            onChange={this.onChange}
                            value={this.state.mondaySales}
                            id="mondaySales"
                            type="number"
                        />
                        <input className="login-input"
                            name="date"
                            onChange={this.onChange}
                            value={this.state.mondayDate}

                            //error={errors.date}

                            id="mondayDate"
                            type="date"
                            />
                    </div>
                    

{
    //tuesdays sales
}
                    <div className="input-group">
                        <label htmlFor="tuesday">Teusday's Sales</label>

                        <input className="login-input"
                            name="tuesday"
                            placeholder="Tuesday's Sales"
                            onChange={this.onChange}
                            value={this.state.tuesdaySales}

                            //error={errors.sales.teusday.sales}

                            id="tuesdaySales"
                            type="number"
                        />

                        <input className="login-input"
                            name="tuesday"
                            onChange={this.onChange}
                            value={this.state.tuesdayDate}

                            //error={errors.date}
                            
                            id="tuesdayDate"
                            type="date"
                            />
                    </div>


{
    //wednesdays sales
}
                        <div className="input-group">
                        <label htmlFor="wednesday">Wednesday's Sales</label>

                        <input className="login-input"
                            name="wednesday"
                            placeholder="Wednesday's Sales"
                            onChange={this.onChange}
                            value={this.state.wednesdaySales}

                            //error={errors.sales.teusday.sales}

                            id="wednesdaySales"
                            type="number"
                        />

                        <input className="login-input"
                            name="wednesday"
                            onChange={this.onChange}
                            value={this.state.wednesdayDate}

                            //error={errors.date}
                            
                            id="WednesdayDate"
                            type="date"
                            />
                    </div>


{
    //thursday sales
}
                        <div className="input-group">
                        <label htmlFor="thursday">Thursday's Sales</label>

                        <input className="login-input"
                            name="thursday"
                            placeholder="Thursday's Sales"
                            onChange={this.onChange}
                            value={this.state.thursdaySales}

                            //error={errors.sales.teusday.sales}

                            id="thursdaySales"
                            type="number"
                        />

                        <input className="login-input"
                            name="thursday"
                            onChange={this.onChange}
                            value={this.state.thursdayDate}

                            //error={errors.date}
                            
                            id="thursdayDate"
                            type="date"
                            />
                    </div>
                    <br></br>


{
    //friday sales
}

                        <div className="input-group">
                        <label htmlFor="friday">Friday's Sales</label>

                        <input className="login-input"
                            name="friday"
                            placeholder="Friday's Sales"
                            onChange={this.onChange}
                            value={this.state.fridaySales}

                            //error={errors.friday.sales}

                            id="fridaySales"
                            type="number"
                        />

                        <input className="login-input"
                            name="friday"
                            onChange={this.onChange}
                            value={this.state.fridayDate}

                            //error={errors.date}
                            
                            id="fridayDate"
                            type="date"
                            />
                    </div>
                    <br></br>


{
    //saturday sales
}
                    <div className="input-group">
                        <label htmlFor="saturday">Saturday's Sales</label>

                        <input className="login-input"
                            name="saturday"
                            placeholder="Saturday's Sales"
                            onChange={this.onChange}
                            value={this.state.saturdaySales}

                            //error={errors.saturday.sales}

                            id="saturdaySales"
                            type="number"
                        />

                        <input className="login-input"
                            name="saturday"
                            onChange={this.onChange}
                            value={this.state.saturdayDate}

                            //error={errors.date}
                            
                            id="saturdayDate"
                            type="date"
                            />
                    </div>
                    <br></br>


                        <button
                        className="login-btn"
                        type="submit" onClick={this.onPost}>Submit</button>

                </form>
            </div>
        </div>
    }
    //if this communicates with the backend, im curious with how data will transfer.
}
export default SalesForm;