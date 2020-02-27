import React from 'react';
import RegForm from '../../components/Register/RegForm';
import LogLink from '../../Routes/links_Login';



export default function Register() {
    return (
        <div>
        <div>
        <RegForm/>
        </div>
        <br></br>
        <br></br>
        <div>
        <LogLink/>
        </div>
        </div>
    );
}