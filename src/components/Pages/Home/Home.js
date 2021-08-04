import React from 'react';
import './Home.css';
import '../../../App.css';
import HeroSection from '../../HeroSection/HeroSection';
import Footer from '../../Footer/Footer';
import TopProjects from '../Projects/TopProjects/TopProjects';
const Home = () => {
    return ( 
        <div>
            <HeroSection/>
            <h1 style={{textAlign:'center',margin:'20px'}}>Here are are some of my works</h1>
            <div className="portfolio">
            <div className='projects'>
            <TopProjects/>
            </div>
            </div>
            <br /><br />
            <Footer/>
        </div>
     );
}
 
export default Home;