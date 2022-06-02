import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardList from '../components/CardList';
import { videos } from '../components/db.js';

const videosArray = videos.videos;

const Epizody = () => {
    let navigate = useNavigate();
    let { poradURL } = useParams();
    const [epizodyDb, setEpizodyDb] = useState({
        videos: videosArray
    })

    useEffect(() => {
        fetch(`https://data.zaktv.cz//videos.json?programme=${poradURL}`)
        .then(resp => resp.json())
        .then(data => {
            console.log('epizody = ', data);
            setEpizodyDb(data);
        })
    },[]) 

    return (
        <div>
            <h2> Tohle je seznam epizod pořadu { poradURL }.</h2>
            <button 
                onClick={() => {navigate(-1);}}> 
                Go BACK 
            </button>

            <CardList db={epizodyDb.videos} />

        </div>
    );
};

export default Epizody;