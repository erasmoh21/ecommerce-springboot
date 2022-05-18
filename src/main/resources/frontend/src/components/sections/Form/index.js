import React from 'react';
import {REGISTER_FORM_VALUE, LOGIN_FORM_VALUE} from "../../../utils/constants";

import Login from './Login'
import Register from './Register'

const Form = ({typeOfFormToShow, ...props}) =>
    typeOfFormToShow === LOGIN_FORM_VALUE ?
        <Login {...props}/> :
        typeOfFormToShow === REGISTER_FORM_VALUE ?
            <Register {...props}  /> : null

export default Form