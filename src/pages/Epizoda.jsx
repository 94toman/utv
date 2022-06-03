import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Player, Hls, DefaultUi  } from '@vime/react';
import htmlToFormattedText from "html-to-formatted-text";
import './Epizoda.scss'

//https://vimejs.com/components/ui/controls/pip-control
//https://www.npmjs.com/package/vime
//https://www.npmjs.com/package/@vime/core

// https://rcastweb.docs.apiary.io/


const Epizoda = () => {
    let navigate = useNavigate();
    let { poradURL, epizodaURL, id } = useParams();
    const [epizodaState, setEpizodaState] = useState({
        programmetitle: poradURL,
        title: epizodaURL,
        description: 'NAČÍTÁM EPIZODU!'
    });
    console.log('loguju state: ', epizodaState);

    /*
    let videosArray = videos.videos;
    let currentVideo = videosArray.filter(video => {
        return ((video.programmetitle.toLowerCase() === poradURL.toLowerCase()) 
        && (video.title.toLowerCase() === epizodaURL.toLowerCase()));
    })
    let epizoda = currentVideo[0];
*/

/*
    useEffect(() => {
        fetch('https://data.zaktv.cz/videos.json')
        .then(resp => resp.json())
        .then(data => {
            console.log('epizoda ' + data);
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
    },[]) */

    // stažení dat o epizodě ze Serveru a vložení do State
    useEffect(() => {
        fetch(`https://data.zaktv.cz/videos/${id}.json`)
        .then(resp => resp.json())
        .then(data => {
            setEpizodaState(data.video);

        })
    },[]) 
    

    // Vlastní funkce na konverzi HTML do textu -> když bych nechtěl použít NPM package
    const convertToPlain = (html) => {
        // Create a new div element
        let tempDivElement = document.createElement("div");
        // Set the HTML content with the given value
        tempDivElement.innerHTML = html;
        // Retrieve the text property of the element 
        return tempDivElement.textContent || tempDivElement.innerText || "";
    }  

    return (
        <div className='container center'>
            <h2>Pořad: {epizodaState.programmetitle}</h2>
            <button 
                onClick={() => {navigate(-1);}}> 
                Go BACK 
            </button>

            <h2>Epizoda: {epizodaState.title}</h2>
   
            {
                (epizodaState.duration)
                ? <div>
                    <div>{htmlToFormattedText(epizodaState.description)}</div><br/>
                    <Player
                        theme="dark"
                        style={{ '--vm-player-theme': '#000000' }}
                    >
                        <Hls
                            crossOrigin
                            poster={`https://zaktv.cz/epizody/${id}.jpg`}
                        >
                            <source 
                                data-src={`https://vysilani.zaktv.cz/zak/${id}/video.m3u8`}
                                type="application/x-mpegURL" 
                            />
                        </Hls>
                        <DefaultUi noSettings />
                    </Player>
                </div>
                : <h2 className='errortitle'>{epizodaState.description}</h2>
            }                        
        </div>
    );
};

export default Epizoda;