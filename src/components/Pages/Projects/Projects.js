import React, { Component }  from 'react';
import './Projects.css';
import Project from './Project/Project';
import Footer from '../../Footer/Footer';
import TopProjects from './TopProjects/TopProjects';

let otherProjects = [
    {   
        name:'Weather',
        img:'assets/weather.png',
        link:'https://rumiani.github.io/React-Wethear/',
        srcCode:'https://github.com/rumiani/React-Wethear',
        text:'A weather app with React'
    },
    {   
        name:'Freecodecamp JS',
        img:'assets/javascript.png',
        link:'https://rumiani.github.io/js-freecodecamp/',
        srcCode:'https://github.com/rumiani/js-freecodecamp',
        text:`I took the JavaScript Algorithms and Data Structures course from freecodecamp.org and built 6 projects with vanilla JavaScript.`
    },
    {   
        name:'Todo',
        img:'assets/todo.png',
        link:'https://rumiani.github.io/Tasks-list/',
        srcCode:'https://github.com/rumiani/Tasks-list',
        text:'A simple Todo list with vanilla JavaScript which uses local storage.'
    },
]
// let num ;
const Projects = () => {
// const[expand,setExpand]=useState(false)

// const expandHandler = (index)=>{
//     setExpand(true)
//     num=index;
//     let projectElement = document.querySelector('.project');
//     projectElement.classList.add('expand')
// }
// useEffect(()=>{
//     console.log(num);
//     expand?projects = projects.filter((project)=>{
//         return projects.indexOf(project)===num;
//     }):projects=projects;
// })
// console.log(projects);
    return ( 
        <div className="portfolio">
            <h1> My Portfolio</h1>
            <div className='projects'>
                <TopProjects/>
                {
                    otherProjects.map((project,index)=>{
                        return <Project
                        name={project.name}
                        img={project.img}
                        srcCode={project.srcCode}
                        text={project.text}
                        link={project.link}
                        key={index}
                         />
                    })
                }
            </div>
            <Footer/>                            
        </div>
     );
}
 
export default Projects;