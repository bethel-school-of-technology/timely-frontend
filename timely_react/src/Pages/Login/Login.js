import React from 'react';

import RegLink from '../../Routes/link_Register';
import LogForm from '../../components/Login/LogForm';



export default function Login() {
    return (
    <div>
    <div>
    <LogForm/>
    </div>
    <br></br>
    <br></br>
    <div>
    <RegLink/>
    </div>
    </div>
    );
}