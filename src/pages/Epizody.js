import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Epizody = () => {
    let navigate = useNavigate();
    let { poradId } = useParams();
    return (
        <div>
            <h2> Tohle je seznam epizod pořadu { poradId }.</h2>
            <button 
                onClick={() => {navigate(-1);}}> 
                Go BACK 
            </button>

        </div>
    );
};

export default Epizody;