import Project from "../Project/Project";
import React, { Component, Fragment }  from 'react';
let topProjects = [
    {
        name:'Simon',
        img:'/assets/simon.png',
        link:'https://rumiani.github.io/my-simon-react/',
        srcCode:'https://github.com/rumiani/my-simon-react',
        text:'I used React to build a memory game with sign up form and real time database(firebase)'
    },
    {   
        name:'Freecodecamp React',
        img:'assets/fccReact.png',
        link:'https://rumiani.github.io/FCC-React/',
        srcCode:'https://github.com/rumiani/FCC-React',
        text:'I took the Front End Libraries course from Freecodecamp.com and built 5 projects with React.'
    },
    {   
        name:'Dictionary',
        img:'assets/dictionary.png',
        link:'https://rumiani.github.io/dictionary/',
        srcCode:'https://github.com/rumiani/dictionary',
        text:'A dictionary built with owlbot.info API using TypeScript and React.'
    }]
const TopProjects = () => {
    return ( 
        <React.Fragment>
                {
                    topProjects.map((topProject,index)=>{
                        return <Project
                        name={topProject.name}
                        img={topProject.img}
                        srcCode={topProject.srcCode}
                        text={topProject.text}
                        link={topProject.link}
                        key={index}
                         />
                    })
                }
        </React.Fragment>
     );
}
 
export default TopProjects;