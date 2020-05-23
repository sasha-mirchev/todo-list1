import React from 'react';
import './App.css';
import Header from './Header';
import Footer from "./Footer";
import Content from "./Content";
import FooterMenu from "./FooterMenu";
import HeaderMenu from "./HeaderMenu";


function App() {


    const appVersion = '0.4.3.4  ';
    const topmenu = [ 'Product', 'Price','About']
    const footermenu = ['Phones', 'Notebooks', 'Tablets', 'Watch']
    return (
        <div className="App1">

            <Header version={appVersion}/>
            <HeaderMenu topmenu={topmenu}/>


            <Content/>


            <FooterMenu footermenu={footermenu}/>
            <Footer version={appVersion} />

        </div>
    );
}

export default App;
