import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { videos, video } from '../components/db';

const videosArray = videos.videos;
const { title, description, url } = video.video;

const Epizoda = () => {
    let navigate = useNavigate();
    let { poradURL, epizodaURL } = useParams();

    let currentVideo = videosArray.filter(video => {
        return ((video.programmetitle.toLowerCase() === poradURL.toLowerCase()) 
        && (video.title.toLowerCase() === epizodaURL.toLowerCase()));
    })

    let epizoda = currentVideo[0];

    console.log(currentVideo[0]);
    


    return (
        <div className='w-60 center'>
            <button 
                onClick={() => {navigate(-1);}}> 
                Go BACK 
            </button>
            <h2>Pořad {epizoda.programmetitle}</h2>
            <h2>Epizoda: {epizoda.title}</h2>
            <p>{epizoda.description}</p>
            <img alt='vysilani' src={url}/>
            
        </div>
    );
};

export default Epizoda;