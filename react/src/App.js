import React from 'react';
import './App.css';
import Header from './Header';
import Footer from "./Footer";
import Content from "./Content";
import Content2 from "./Content2";
import FooterMenu from "./FooterMenu";
import HeaderMenu from "./HeaderMenu";
import Usestate from "./UseState";

function App() {


    const appVersion = '0.4.3.4  ';
    const topmenu = [ 'Product', 'Price','About']
    const footermenu = ['Phones', 'Notebooks', 'Tablets', 'Watch']
    const fisher = () => {
        console.log('Pull')
    }
    return (
        <div className="App1">

            <Header version={appVersion}/>
            <HeaderMenu topmenu={topmenu} attempt={fisher} />


            <Content/>
            <Content2/>
            <Usestate/>



            <FooterMenu footermenu={footermenu}/>
            <Footer version={appVersion} />

        </div>
    );
}

export default App;
