import './Rocket.css';
import React, { Component }  from 'react';
let audio = new Audio('./assets/rocket.wav');
const Rocket = () => {

    const launchHandler = ()=>{
        let fly = document.getElementById('rocket')
        fly.classList.remove('rocket')
        fly.classList.add('fly')
        audio.play()
        setTimeout(() => {
            fly.style.display= 'none';
            audio.pause();
            audio.currentTime=0;
        }, 12000);
    }

    return ( 
            <img className='rocket' id='rocket' onClick={launchHandler} src="https://twemoji.maxcdn.com/2/72x72/1f680.png" alt="Space Ship" />
     );
}
 
export default Rocket;