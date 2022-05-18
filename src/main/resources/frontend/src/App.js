import React, {useState} from "react";

import Header from './components/sections/Header'
import Body from './components/sections/Body'
import Footer from './components/sections/Footer'
import Form from "./components/sections/Form";
import './App.scss'


function App() {
    const [typeOfFormToShow, setTypeOfFormToShow] = useState('')

    console.log(typeOfFormToShow)
    return (
        <div className={`main-app ${typeOfFormToShow ? 'no-scroll' : ''}`}>
            <Header setTypeOfFormToShow={setTypeOfFormToShow} userData={false}/>
            {!typeOfFormToShow ? <>
                <Body/>
                <Footer/>
            </> : <Form typeOfFormToShow={typeOfFormToShow} setTypeOfFormToShow={setTypeOfFormToShow}/>}
        </div>);
}

export default App;
