import React from 'react';
import {MAIN_PAGE_VALUE} from "../../../utils/constants";

import './Form.scss'

const Login = ({setTypeOfFormToShow}) => {
    return (
        <div className={'form-section'} onClick={() => setTypeOfFormToShow(MAIN_PAGE_VALUE)}>
            Login
        </div>
    );
};

export default Login;