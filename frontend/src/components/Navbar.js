import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar({click}) {
    return (
        <nav className="navbar">
            <ul>
            <div className="navbar__logo">
            
            <Link to='/'><h2>Sports Event Management</h2></Link>
            </div>
            </ul>

            <ul className="navbar__links">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/addevent'>Add Event</Link>
                </li>
                <li>
                    <Link to='/viewevent'>Event Details</Link>
                </li>
                <li>
                    <Link to='/aboutus'>About Us</Link>
                </li>
                <li>
                    <Link to='/contactus'>Contact Us</Link>
                </li>
                <li>
                    <Link to='/cart' className='cart__link'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                        Shop
                        </span>
                    </Link>
                </li>
            </ul>

            
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                
                <div></div>
                
                <div></div>
                
            </div>
        </nav>

    )
}

export default Navbar
