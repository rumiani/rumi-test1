import React from 'react';
import './Project.css';
const Project = (props) => {
    return ( 
            <div className="project" >
                    <div className='pic_div'>
                        <img src={props.img} alt="project_pic" className='project_pic' />
                        <span className='project_name'>{props.name}</span>
                    </div>
                    <div className="projects_info">
                        <p className="project_text" >{props.text}</p>
                        <div className='info_Links'>
                            <a href={props.srcCode} target='_blank'>
                                <i className="fab fa-github"></i> 
                                <span>open the src code</span>
                            </a>
                            <a href={props.link} target='_blank'>
                                <i class="fas fa-external-link-alt"/>
                                <span>open the app</span>
                            </a>
                        </div>
                    </div>
            </div>
     );
}
 
export default Project;