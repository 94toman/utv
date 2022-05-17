import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardList from '../components/CardList';
import { videos } from '../components/db.js';

const videosArray = videos.videos;

const Epizody = () => {
    let navigate = useNavigate();
    let { poradURL } = useParams();
    return (
        <div>
            <h2> Tohle je seznam epizod pořadu { poradURL }.</h2>
            <button 
                onClick={() => {navigate(-1);}}> 
                Go BACK 
            </button>

            <CardList db={
            videosArray.filter(video => {
                return video.programmetitle.toLowerCase() === poradURL.toLowerCase();
            })
        } />

        </div>
    );
};

export default Epizody;