import React from 'react';
import CreateForm from '@/components/Ui/CreateForm';

const CreateEmployee = () => {



    return (
        <div className='create-employee'>
            <img
                src={process.env.PUBLIC_URL + 'icon.svg'}
                alt="HRnet Logo" />
            <h1>HRnet</h1>
            <CreateForm />
        </div>
    );
};

export default CreateEmployee;