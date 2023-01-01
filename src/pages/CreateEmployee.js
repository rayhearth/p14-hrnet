import React from 'react';
import CreateForm from '../components/Ui/CreateForm';

const CreateEmployee = () => {



    return (
        <div className='create-employee'>
            <div className="banner">
                <img
                    src={process.env.PUBLIC_URL + 'logo.svg'}
                    alt="HRnet Logo"
                    className='logo-banner' />
                <h1>HRnet</h1>
            </div>
            <CreateForm />
        </div>
    );
};

export default CreateEmployee;