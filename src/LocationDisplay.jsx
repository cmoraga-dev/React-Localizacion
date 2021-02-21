import React from 'react';
import northernImg from './img/north.gif';
import southernImg from './img/south.jpg';
import './Location.css';

const LocationConf = {
    Northern : {
        text: 'norte',
        picture: northernImg
    },
    Southern : {
        text: 'sur',
        picture: southernImg
    } 
}

const LocationDisplay = ({latitude}) =>{

    var {text, picture} = 
    latitude > 0 ? LocationConf['Northern'] : LocationConf['Southern'];

    return (
        <div className = {text}> 
            <div className="ui raised text container segment">
                <div className="image"><img className="center-fit" src={picture} alt="location pic"/> </div>
                <div className="ui teal bottom attached label">
                    <h1>Hey, estás en el hemisferio {text}.</h1> 
                </div>
                

 
            </div>
        

        </div>
    )
}

export default LocationDisplay; 