import React from 'react';
import CardList from '../components/CardList';
import { programmes } from '../components/db.js';

const Home = () => {
    return (
        <div>
            <h2>HOME PAGE</h2>
            <p> Tady můžou bejt nějaké úvodní informace, nebo odkaz na živé vysílání.</p>
            <p>Lorem ipsum.</p>
            <h2>Následuje seznam pořadů.</h2>
            <CardList db={programmes.programmes} />
        </div>
    );
};

export default Home;