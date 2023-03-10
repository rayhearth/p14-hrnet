import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    let navigate = useNavigate()

    const home = () => {
        navigate('/home')
    }

    const create = () => {
        navigate('/create-employee')
    }

    const current = () => {
        navigate('/current-employee')
    }

    return (
        <header>
            <nav className="main-nav">
                <ul className='linkContent'>
                    <li className="main-nav-item" onClick={home}>
                        Home
                    </li>
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