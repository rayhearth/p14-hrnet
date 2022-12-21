import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
// import ReactDropdown from 'react-dropdown';

import allData from '@/data/states'
import { useDispatch } from 'react-redux';
import { addEmployee } from '@/feature/employeeSlice.slice';
import ReactDropdown from 'react-dropdown';


const Form = () => {

    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        street: '',
        city: '',
        states: '',
        zipcode: '',
        department: '',
    })

    const dispatch = useDispatch()

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        const employee = {
            // firstName,
            // lastName,
            // department,
            // startDate,
            // birthDate,
            // street,
            // city,
            // states,
            // zipcode,
        }

        dispatch(addEmployee(employee))
    }

    return (
        <form action="">
            <h2>Create Employee</h2>

            <div className='formData'>
                <label className="form-label" for="firstName">First Name: </label>
                <input className="form-control" type="text" id="first" name="firstName" placeholder='Firstname' onChange={onChange} />
            </div>

            <div className='formData'>
                <label className="form-label" for="lastName">Last Name: </label>
                <input className="form-control" type="text" id="last" name="lastName" placeholder='Lastname' onChange={onChange} />
            </div>

            <div className='formData'>
                <label className="form-label" for="birth">Date of Birth: <ReactDatePicker
                    selected={credentials.birthDate}
                    dateFormat='dd/mm/yyyy'
                    onChange={onChange}
                /> </label>
            </div>

            <div className='formData'>
                <label className="form-label" for="start">Start Date:<ReactDatePicker
                    selected={credentials.startDate}
                    dateFormat='dd/mm/yyyy'
                    onChange={onChange}
                /> </label>

            </div>

            <fieldset className='adress-area'>

                <div className='formData'>
                    <label className="form-label" for="street">Street: </label>
                    <input className="form-control" type="text" id="last" name="street" placeholder='Street' onChange={onChange} />
                </div>

                <div className='formData'>
                    <label className="form-label" for="city">City: </label>
                    <input className="form-control" type="text" id="last" name="city" placeholder='City' onChange={onChange} />
                </div>

                <div className='formData'>
                    <label className="form-label"> State </label>

                </div>

                <div className='formData'>
                    <label className="form-label" for="zipcode">Zip Code: </label>
                    <input className="form-control" type="number" id="last" name="zipcode" placeholder='Zip Code' onChange={onChange} />
                </div>


            </fieldset>

        </form>
    );
};

export default Form;