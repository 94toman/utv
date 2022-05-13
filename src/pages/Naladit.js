import React from 'react';
import { useNavigate } from 'react-router-dom';

const Naladit = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h2>This is Jak Naladit page</h2>
            <button 
                onClick={() => {navigate('/');}}> 
                Go HOME 
            </button>
        </div>
    );
};

export default Naladit;