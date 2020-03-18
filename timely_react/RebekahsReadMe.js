
//previous code for reference regarding fetch/posting data



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: "", username: "", password: "", firstName: "", lastName: "", values: [], error: "" };
  }


  //login fetch to database and giving of token
  onLogin = () => {
    fetch("http://localhost:8080/login", {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify({ username: this.state.username, password: this.state.password })
    })
    .then(res => res.headers.get("authorization"))
    .then(token => {
      if (token) {
        this.setState({ ...this.state, token: token });
      } else {
        this.setState({ ...this.state, error: "Unable to login with username and password." });
      }
    });
  }

  //Register page and posting data to database
  onRegister = () => {
    fetch("http://localhost:8080/api/user/register", {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify({ username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName })
    })
    .then(res => res.headers.get("authorization"))
    .then(token => {
      if (token) {
        this.setState({ ...this.state, token: token });
      } else {
        this.setState({ ...this.state, error: "Unable to login with username and password." });
      }
    });
  }


//code below is simplified by this code -- 
//        onChange = e => {this.setState({ [e.target.id]: e.target.value });}
//what this is doing, is allowing every object given an ID to be passed to the target hosting the same value. instead of specifying EACH target, you can create a multi-targeting function

  onUsernameChange = (e) => this.setState({ ...this.state, username: e.target.value });
  onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });
  onFirstNameChange = (e) => this.setState({ ...this.state, firstName: e.target.value });
  onLastNameChange = (e) => this.setState({ ...this.state, lastName: e.target.value });


// values page function
  onGetValues = () => {
    fetch("http://localhost:8080/api/values", {
      headers: { 'Authorization': this.state.token }
    })
    .then(res => res.json())
    .then(json => this.setState({ ...this.state, values: json }));
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
      {
      //if then statement for how the token will determine path
      (!this.state.token || this.state.token === "")
        ? (<Register 
        onUsernameChange={this.onUsernameChange}
        onPasswordChange={this.onPasswordChange}
        onFirstNameChange={this.onFirstNameChange}
        onLastNameChange={this.onLastNameChange}
        onRegister={this.onRegister}
        error={this.state.error}></Register>)
        : (<Values values={this.state.values} onGetValues={this.onGetValues}></Values>)}
      </header>
    </div>
    );
  }
}

export default App;
