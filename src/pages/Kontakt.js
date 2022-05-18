import React from 'react';
import { useNavigate } from 'react-router-dom';

const Kontakt = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h2>This is Kontakt page</h2>
            <button 
                onClick={() => {navigate('/');}}> 
                Go HOME 
            </button>
        </div>
    );
};

export default Kontakt;