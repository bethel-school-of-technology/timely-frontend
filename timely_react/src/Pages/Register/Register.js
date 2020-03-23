import React from 'react';

import LogLink from '../../Routes/links_Login';
import RegForm from '../../components/Register/RegForm';



class Register extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <RegForm uri="http://localhost:8080/register"/>
                </div>
            {/* <br></br>
            <br></br>
                {/* <div>
                    <LogLink/>
                </div> */} */}
            </div>
        );
    }
}

export default Register;