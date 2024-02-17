import { Link } from 'react-router-dom';
import icon from './icons8-repo-32.png';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    return (
        <nav className='nav-container'>
            <Link to={`/GitHub-Profile-Viewer`} className='link'>
                <span className='navText'>Home</span>
            </Link>
           <Link to={`/GitHub-Profile-Viewer/profile`} className='link'>
                <FontAwesomeIcon icon={faUser} />
                <span className='navText'>Profile</span>
            </Link>
            <Link to={`/GitHub-Profile-Viewer/repos`} className='link'>

                <img src={icon} className='icon' alt="Icon" />
                <span className='navText'>Repos</span>


            </Link>


        </nav>
    )
}