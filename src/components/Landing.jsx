import React from 'react';

// components below
import Header from './content/Header';
import FirstObject from './content/FirtsObject';
import SecondObject from './content/SecondObject';
import ThirdObject from './content/ThirdObject';
import Footer from './content/Footer';
// styles below
import styles from './Landing.css'

const Landing = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <FirstObject/>
            <SecondObject/>
            <ThirdObject/>
            <Footer/>
        </div>
    );
};

export default Landing;