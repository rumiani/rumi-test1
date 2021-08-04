import React  from 'react';
import './SocialIcons.css';
const SocialIcons = () => {
    return ( 
            <ul className="social-icons">
                        <li className="github">
                            <a href="https://github.com/rumiani" target='_blank'>
                            <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className="twitter">
                            <a href="https://twitter.com/Rumianian" target='_blank'>
                            <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="linkedin">
                            <a href="https://www.linkedin.com/in/maziar-rumiani-b5401416a/" target='_blank'>
                            <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="telegram">
                            <a href="https://t.me/rumi_rumi" target='_blank'>
                            <i className="fab fa-telegram"></i>
                            </a>
                        </li>
                    </ul>
     );
}
 
export default SocialIcons;