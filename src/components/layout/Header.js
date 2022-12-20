import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Header = () => {

    let navigate = useNavigate()

    const create = () => {
        navigate('/create-employee')
    }

    const current = () => {
        navigate('/current-employee')
    }

    return (
        <header>
            <nav className="main-nav">
                <Link to='/' className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={process.env.PUBLIC_URL + 'icon.png'}
                        alt="HRnet Logo"
                    />
                </Link>

                <ul className='linkContent'>
                    <li className="main-nav-item" onClick={create}>
                        Create an Employee
                    </li>
                    <li className="main-nav-item" onClick={current}>
                        View Current Employee
                    </li>
                </ul>
            </nav>
        </header >
    );
};

export default Header;