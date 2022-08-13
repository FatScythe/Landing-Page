import { Link } from 'react-scroll';
import logo from '../img/demo-logo.png';

const Navbar = () => {
    return (
        <nav id='nav-bar' className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a href='../index.html'><img src={ logo } alt='logo' className='logo'></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                <span className="material-symbols-outlined menu">menu</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mt-3">
                    <li className="nav-item ms-auto me-3 mb-2">
                        <Link
                        activeClass = "active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='text-decoration-none'
                        >HOME</Link>
                    </li>
                    <li className="nav-item ms-auto me-3 mb-2">
                        <Link
                        activeClass = "active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='text-decoration-none'
                        >SERVICES</Link>
                    </li>
                    <li className="nav-item ms-auto me-3 mb-2">
                        <Link
                        activeClass = "active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='text-decoration-none'
                        >ABOUT-US</Link>
                    </li>
                    <li className="nav-item ms-auto me-3 mb-2">
                        <Link
                        activeClass = "active"
                        to="testimonial"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='text-decoration-none cursor-pointer'
                        >TESTIMONIAL</Link>
                    </li>
                    <li className="nav-item ms-auto me-3 mb-2">
                    <Link
                        activeClass = "active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='text-decoration-none'
                        >CONTACT</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;