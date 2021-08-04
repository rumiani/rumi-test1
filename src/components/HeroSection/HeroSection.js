import { useEffect } from 'react';
import './HeroSection.css'
import Rocket from './Rocket/Rocket';
import React, { Component }  from 'react';
// const email = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=maziar9170@gmail.com'

const HeroSection = () => {
    useEffect(()=>{
        let getElement = document.querySelector('.whoIAm')
        let fullText = `Hi,<br> my name is <strong style={color:red}>Maziar Rumiani</strong>.<br>
                        I am a passionate Front End web developer.`
        let currentText = ``
        let i = 0;
        let interval = setInterval(()=>{
            currentText = currentText + fullText[i];
            getElement.innerHTML = currentText+'_';
            i++;
            if (i >= fullText.length){        
                getElement.innerHTML = currentText;
                clearInterval(interval);
            }
        }, 50);         
    })
    
    return ( 
        <div className="hero-container" 
        style={{backgroundImage: `url(./assets/pic-2.jpg)`}}>
                    <p className='whoIAm'></p>
                <div className="intruduce">
                    <p>I am a motiveted self taught programmer who loves learning and facing new chalenges.I'm fluent in
                        English then I don't have any problem learning new things. Now, I'd like to
                        work in a team to learn more and gain experience. I'm open to work if your company has a positioin for me.                    
                        
                    </p>
                <a className='contactMe'href='#footer'> 
                    Get In Touch
                </a>
                </div>
                <div className='about'>

                   <p><strong>ABOUT ME: </strong>
                   I used to work in a web hosting company but, last year because of my passion for programming I chose to change my career then
                   I started to take some courses from <a href="Coursera.org">Coursera</a> and <a href="Freecodecamp.org">FreeCodeCamp</a><br />
                       Here are few technologies I've been working with recently: <br />
                       <ul>
                           <li>React</li>
                           <li>JavaScript (ES6+)</li>
                           <li>TypeScript</li>
                           <li>Git & GitHub </li>
                           <li>CSS</li>
                           <li>HTML</li>
                           <li>WordPress</li>
                       </ul>

                    </p>
                    <img id='myPic' src="./assets/rumi.png" alt="Maziar Rumiani" />
                </div>
                <Rocket/>
        </div>
     );
}
 
export default HeroSection;