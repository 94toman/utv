import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Player, Hls, DefaultUi  } from '@vime/react';

import { videos, video } from '../components/db';
import './Epizoda.scss'

//https://vimejs.com/components/ui/controls/pip-control
//https://www.npmjs.com/package/vime
//https://www.npmjs.com/package/@vime/core

// https://rcastweb.docs.apiary.io/


const Epizoda = () => {
    let navigate = useNavigate();
    let { poradURL, epizodaURL } = useParams();
    const [epizodaState, setEpizodaState] = useState({
        programmetitle: poradURL,
        title: epizodaURL,
        description: 'NAČÍTÁM!'
    });
    console.log('loguju state: ', epizodaState);

    let videosArray = videos.videos;
    let currentVideo = videosArray.filter(video => {
        return ((video.programmetitle.toLowerCase() === poradURL.toLowerCase()) 
        && (video.title.toLowerCase() === epizodaURL.toLowerCase()));
    })
    let epizoda = currentVideo[0];


    useEffect(() => {
        // Nastaví obsah state description do pole v Epizodě
        

        fetch('https://private-anon-a937c432f2-rcastweb.apiary-mock.com/videos.json')
        .then(resp => resp.json())
        .then(data => {
            let fetchedData = data.videos;
            let fetchedVideo = fetchedData.filter(video => {
                return ((video.programmetitle.toLowerCase() === poradURL.toLowerCase()) 
                && (video.title.toLowerCase() === epizodaURL.toLowerCase()));
            })
            if (fetchedVideo.length === 0) {
                setEpizodaState({...epizodaState, description: 'Epizoda nenalezena na serveru!'})
            } else {
                setEpizodaState(fetchedVideo[0]);
            }
        })
    },[]) 
    
    const convertToPlain = (html) => {
        // Create a new div element
        let tempDivElement = document.createElement("div");
        // Set the HTML content with the given value
        tempDivElement.innerHTML = html;
        // Retrieve the text property of the element 
        return tempDivElement.textContent || tempDivElement.innerText || "";
    }  

    return (
        <div className='w-60 center'>
            
            <h2>Pořad: {epizoda.programmetitle}</h2>
            <h2>Epizoda: {epizoda.title}</h2>     
            <p>{epizoda.description}</p>

            <button 
                onClick={() => {navigate(-1);}}> 
                Go BACK 
            </button>

            <h1>STATE CONTENT:</h1>
            <h2>Pořad: {epizodaState.programmetitle}</h2>
            <h2>Epizoda: {epizodaState.title}</h2>
            <div id='statedescription' >{convertToPlain(epizodaState.description)}</div>

            {
                (epizodaState.duration)
                ? <Player
                    theme="dark"
                    style={{ '--vm-player-theme': '#000000' }}
                >
                    <Hls
                        crossOrigin
                        poster="https://www.zaktv.cz/epizody/6861.jpg"
                    >
                        <source 
                            data-src="https://vysilani.zaktv.cz/zak/6861/video.m3u8" 
                            type="application/x-mpegURL" 
                        />
                    </Hls>
                    <DefaultUi noSettings />
                </Player>
                : <h2 className='errortitle'>EPIZODA NENALEZENA</h2>
            }                        
        </div>
    );
};

export default Epizoda;