import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardList from '../components/CardList';
import { videos } from '../components/db.js';


const videosArray = videos.videos;


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



/*


            
            {

            }
            {   
               /* videosArray2.map((video, i) => {
                    console.log(video.programmetitle);

                }
            ) 
        }


        <CardList db={
            videosArray.filter(video => {
                return video.programmetitle === title;
            })
        } />

*/
