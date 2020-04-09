import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from "../../Services/user.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class SalesForm extends React.Component {
  constructor() {
    super();
    this.state = {
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
      message: "",
      errors: {},
    };
  }

  //onChange ties in the form values to the components state
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  //prevent default stops re-rendering of page
  onSubmit = (s) => {
    s.preventDefault();
    this.setState({
      message: "",
    });

    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      UserService.postSunSales(this.state.sundaySales, this.state.sundayDate);
      UserService.postMonSales(this.state.mondaySales, this.state.mondayDate);
      UserService.postTueSales(this.state.tuesdaySales, this.state.tuesdayDate);
      UserService.postWedSales(
        this.state.wednesdaySales,
        this.state.wednesdayDate
      );
      UserService.postThuSales(
        this.state.thursdaySales,
        this.state.thursdayDate
      );
      UserService.postFriSales(this.state.fridaySales, this.state.fridayDate);
      UserService.postSatSales(
        this.state.saturdaySales,
        this.state.saturdayDate
      ).then(
        (response) => {
          this.setState({
            message: response.data.message,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            message: resMessage,
          });
        }
      );
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="root-container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h1 style={{ color: "#009688" }}>Input Weekly Sales</h1>
        <br></br>
        <div className="inner-container">
          <div className="box-header"></div>

          <Form
            onSubmit={this.onSubmit}
            ref={(c) => {
              this.form = c;
            }}
            className="box"
          >
            {
              //sunday sales
            }
            <div className="input-group">
              <label htmlFor="sunday">Sunday's Sales</label>

              <Input
                className="login-input"
                name="sunday"
                placeholder="Sunday's Sales"
                onChange={this.onChange}
                value={this.state.sundaySales}
                error={errors.sundaySales}
                id="sundaySales"
                type="number"
                validations={[required]}
              />

              <Input
                className="login-input"
                name="sunday"
                onChange={this.onChange}
                value={this.state.sundayDate}
                error={errors.sundayDate}
                id="sundayDate"
                type="date"
                validations={[required]}
              />
            </div>

            {
              //mondays Sales
            }
            <div className="input-group">
              <label htmlFor="monday">Monday's Sales</label>

              <Input
                className="login-input"
                name="monday"
                placeholder="Monday Sales"
                onChange={this.onChange}
                value={this.state.mondaySales}
                error={errors.mondaySales}
                id="mondaySales"
                type="number"
                validations={[required]}
              />
              <Input
                className="login-input"
                name="date"
                onChange={this.onChange}
                value={this.state.mondayDate}
                error={errors.mondaydate}
                id="mondayDate"
                type="date"
                validations={[required]}
              />
            </div>

            {
              //tuesdays sales
            }
            <div className="input-group">
              <label htmlFor="tuesday">Tuesday's Sales</label>

              <Input
                className="login-input"
                name="tuesday"
                placeholder="Tuesday's Sales"
                onChange={this.onChange}
                value={this.state.tuesdaySales}
                error={errors.tuesdaySales}
                id="tuesdaySales"
                type="number"
                validations={[required]}
              />

              <Input
                className="login-input"
                name="tuesday"
                onChange={this.onChange}
                value={this.state.tuesdayDate}
                error={errors.tuesdayDate}
                id="tuesdayDate"
                type="date"
                validations={[required]}
              />
            </div>

            {
              //wednesdays sales
            }
            <div className="input-group">
              <label htmlFor="wednesday">Wednesday's Sales</label>

              <Input
                className="login-input"
                name="wednesday"
                placeholder="Wednesday's Sales"
                onChange={this.onChange}
                value={this.state.wednesdaySales}
                error={errors.wednesdaySales}
                id="wednesdaySales"
                type="number"
                validations={[required]}
              />

              <Input
                className="login-input"
                name="wednesday"
                onChange={this.onChange}
                value={this.state.wednesdayDate}
                error={errors.wednesdayDate}
                id="wednesdayDate"
                type="date"
                validations={[required]}
              />
            </div>

            {
              //thursday sales
            }
            <div className="input-group">
              <label htmlFor="thursday">Thursday's Sales</label>

              <Input
                className="login-input"
                name="thursday"
                placeholder="Thursday's Sales"
                onChange={this.onChange}
                value={this.state.thursdaySales}
                error={errors.thursdaySales}
                id="thursdaySales"
                type="number"
                validations={[required]}
              />

              <Input
                className="login-input"
                name="thursday"
                onChange={this.onChange}
                value={this.state.thursdayDate}
                error={errors.thursdayDate}
                id="thursdayDate"
                type="date"
                validations={[required]}
              />
            </div>

            {
              //friday sales
            }

            <div className="input-group">
              <label htmlFor="friday">Friday's Sales</label>

              <Input
                className="login-input"
                name="friday"
                placeholder="Friday's Sales"
                onChange={this.onChange}
                value={this.state.fridaySales}
                error={errors.fridaySales}
                id="fridaySales"
                type="number"
                validations={[required]}
              />

              <Input
                className="login-input"
                name="friday"
                onChange={this.onChange}
                value={this.state.fridayDate}
                error={errors.fridayDate}
                id="fridayDate"
                type="date"
                validations={[required]}
              />
            </div>

            {
              //saturday sales
            }
            <div className="input-group">
              <label htmlFor="saturday">Saturday's Sales</label>

              <Input
                className="login-input"
                name="saturday"
                placeholder="Saturday's Sales"
                onChange={this.onChange}
                value={this.state.saturdaySales}
                error={errors.saturdaySales}
                id="saturdaySales"
                type="number"
                validations={[required]}
              />

              <Input
                className="login-input"
                name="saturday"
                onChange={this.onChange}
                value={this.state.saturdayDate}
                error={errors.saturdayDate}
                id="saturdayDate"
                type="date"
                validations={[required]}
              />
            </div>
            <button className="login-btn2" type="submit">
              Submit
            </button>
            <br />
            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default SalesForm;
