import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Player, Hls, DefaultUi  } from '@vime/react';

import { videos, video } from '../components/db';
import './Epizoda.scss'

//https://vimejs.com/components/ui/controls/pip-control
//https://www.npmjs.com/package/vime
//https://www.npmjs.com/package/@vime/core




const Epizoda = () => {
    let navigate = useNavigate();
    let { poradURL, epizodaURL } = useParams();

    let videosArray = videos.videos;
    let currentVideo = videosArray.filter(video => {
        return ((video.programmetitle.toLowerCase() === poradURL.toLowerCase()) 
        && (video.title.toLowerCase() === epizodaURL.toLowerCase()));
    })
    let epizoda = currentVideo[0];

    return (
        <div className='w-60 center'>

            <button 
                onClick={() => {navigate(-1);}}> 
                Go BACK 
            </button>
            <h2>Pořad {epizoda.programmetitle}</h2>
            <h2>Epizoda: {epizoda.title}</h2>
            <p>{epizoda.description}</p>


            <Player
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


                        
        </div>
    );
};

export default Epizoda;