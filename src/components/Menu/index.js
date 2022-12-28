import { Link, NavLink } from 'react-router-dom';
import './index.scss';

const Menu = () => {
    return (
        <div className="menu">
            <Link to="/">
                <h3 className="name">Jasmyne Okudo</h3>
            </Link>
            
            <nav className='options'>
                <NavLink exact="true" activeclassname="active" to="/art">
                    <h3>Art</h3>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <h3>Photos</h3>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/code">
                    <h3>Code</h3>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <h3>Contact</h3>
                </NavLink>
            </nav>
        </div>
    )
}

export default Menu;