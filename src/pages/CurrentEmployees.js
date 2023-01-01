import React from 'react';
import Table from '../components/Ui/Table';

const CurrentEmployees = () => {
    return (
        <div className='currentEmployees'>
            <div className="banner">
                <img
                    src={process.env.PUBLIC_URL + 'logo.svg'}
                    alt="HRnet Logo"
                    className='logo-banner' />
                <h1>Current Employees</h1>

            </div>
            <Table />
        </div>
    );
};

export default CurrentEmployees;