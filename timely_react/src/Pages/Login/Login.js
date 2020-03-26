import React from 'react';

import RegLink from '../../Routes/link_Register';
import LoginForm from '../../components/Login/LogForm';



class Login extends React.Component {
    render() {
        return (
        <div>
        <div>
         <LoginForm uri="http://localhost:8080/login"/>
        </div>
            <br></br>
            <br></br>
        {/* <div>
            <RegLink/>
        </div> */}
        </div>
        );
    }
}

export default Login;