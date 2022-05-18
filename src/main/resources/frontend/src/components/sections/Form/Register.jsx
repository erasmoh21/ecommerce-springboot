import React from 'react';
import {MAIN_PAGE_VALUE} from "../../../utils/constants";

import './Form.scss'

const Register = ({setTypeOfFormToShow}) => {
    return (
        <div className={'form-section'} onClick={() => setTypeOfFormToShow(MAIN_PAGE_VALUE)}>
            Register
        </div>
    );
};

export default Register;