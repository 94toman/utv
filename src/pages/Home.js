import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';

const Home = ({dbDefault}) => {

    console.log(dbDefault);
    return (
        <div>
            <h2>HOME PAGE</h2>
            <p> Tady můžou bejt nějaké úvodní informace, nebo odkaz na živé vysílání.</p>
            <p>Lorem ipsum.</p>
            <h2>Následuje seznam pořadů.</h2>
            <CardList db={
                dbDefault.filter(porad => {
                    return porad.logo
                })
                } />
        </div>
    );
};

export default Home;