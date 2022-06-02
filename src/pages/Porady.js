import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from '../components/CardList';
import { video } from '../components/db';



const Porady = ({dbDefault}) => {
    let navigate = useNavigate();

    return (
        <div>
            <h2>This is Pořady page</h2>
            <button 
                onClick={() => {navigate('/');}}> 
                Go HOME 
            </button>

            <CardList db={
                dbDefault.filter(porad => {
                    return porad.logo
                })
             } />
        </div>
    );
};

export default Porady;