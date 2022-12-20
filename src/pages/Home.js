import React from 'react';
import { Form } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <h1>Hello world</h1>
        </div>
        <section className='form-container'>
<Form/>
        </section>
    );
};

export default Home;