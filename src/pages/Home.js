import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <div className='society'>
                <img
                    className="main-nav-logo-image"
                    src={process.env.PUBLIC_URL + 'logo.svg'}
                    alt="HRnet Logo"
                />
                <h1>HRnet</h1>
            </div>
            <div className='markdown-img'>
                <img src={process.env.PUBLIC_URL + 'bg-home-hrnet.webp'} alt="" />
            </div>
        </div>
    );
};

export default Home;