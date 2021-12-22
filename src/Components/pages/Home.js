import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Technical_Persons from '../Technical_Persons';
import Footer from '../Footer';

function Home(){
    return(
        <>
        <Technical_Persons/>
        <Cards/>
        <Footer/>
        </>
    )
}

export default Home;