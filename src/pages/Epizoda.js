import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { videos, video } from '../components/db';

const videosArray = videos.videos;
const { title, description, url } = video.video;

const Epizoda = () => {
    let navigate = useNavigate();
    let { poradURL, epizodaURL } = useParams();

    const currentVideo = videosArray.filter(video => {
        return ((video.programmetitle.toLowerCase() === poradURL.toLowerCase()) 
        && (video.title.toLowerCase() === epizodaURL.toLowerCase()));
    })

    console.log(currentVideo[0]);
    


    return (
        <div className='w-60 center'>
            <button 
                onClick={() => {navigate(-1);}}> 
                Go BACK 
            </button>
            <h2>This is Epizoda</h2>
            <h2>URL Title: {epizodaURL}</h2>
            <h2>Object title: {title}</h2>
            <p>Object description: {description}</p>
            <img alt='vysilani' src={url}/>
            
        </div>
    );
};

export default Epizoda;