import Menu from '../Menu';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Menu/>
            <div className='page'>

                <Outlet/>
            </div>
            <div className='footer'>
                <a 
                    href='https://github.com/jasmyneokudo'
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a 
                    href='https://github.com/jasmyneokudo'
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a 
                    href='https://www.linkedin.com/in/jasmyne-okudo-360426161/'
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>    
    )
}

export default Layout;