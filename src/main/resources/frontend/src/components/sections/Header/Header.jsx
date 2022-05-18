import React from "react";

import Button from "../../cells/Button";
import {REGISTER_FORM_VALUE, LOGIN_FORM_VALUE, MAIN_PAGE_VALUE} from "../../../utils/constants";
import logo from '../../../assets/logotemp.svg'
import menuham from '../../../assets/menuham.svg'
import './Header.scss'

const Header = ({setTypeOfFormToShow, userData}) => {
    const returnToMainScreen = () => {
        if (setTypeOfFormToShow)
            setTypeOfFormToShow(MAIN_PAGE_VALUE)
    }

    return (
        <header className={'header'}>
            <button type={'button'} className={'header-logo'} onClick={returnToMainScreen}>
                <img src={logo} alt={'Company logo'}/>
                <span className={'header-logo-text'}>Renta un auto</span>
            </button>
            {userData.name ? <UserHeaderData/> : <LoginHeaderButtons setTypeOfFormToShow={setTypeOfFormToShow}/>}
            <button type={'button'} className={'header-ham-menu'}>
                <img src={menuham} alt={'Hamburguer menu icon'} />
            </button>

        </header>
    );
};

export default Header;

const LoginHeaderButtons = ({setTypeOfFormToShow}) => (
    <div className={'header-buttons'}>
        <Button text={'Crear cuenta'} type={'outlined'} size={'xs'} onClick={() => setTypeOfFormToShow(REGISTER_FORM_VALUE)} />
        <Button text={'Iniciar sesión'} type={'outlined'} size={'xs'} onClick={() => setTypeOfFormToShow(LOGIN_FORM_VALUE)} />
    </div>
)

const UserHeaderData = () => (
    <div>
        User
    </div>
)