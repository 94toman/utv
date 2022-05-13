import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from '../components/CardList';

const Porady = ({dbPorady}) => {
    let navigate = useNavigate();
    return (
        <div>
            <h2>This is Pořady page</h2>
            <button 
                onClick={() => {navigate('/');}}> 
                Go HOME 
            </button>

            <CardList programmes={dbPorady.programmes} />
        </div>
    );
};

export default Porady;