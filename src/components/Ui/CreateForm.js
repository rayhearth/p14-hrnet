import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { allData } from '@/data/states'
import { useDispatch } from 'react-redux';
import { addEmployee } from '@/feature/employeeSlice.slice';


const CreateForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setbirthDate] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')

    // const dateParser = (date) => {
    //     let newDate = new Date(date).toLocaleDateString("fr-FR", {
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric'
    //     })
    //     return newDate
    // }

    const option = allData.states.map((el) => ({
        label: el.name,
        value: el.abbreviation,
    }))

    const dispatch = useDispatch()

    const handleEdit = (e) => {
        e.preventDefault()
        const employee = [
            firstName,
            lastName,
            department,
            startDate,
            birthDate,
            street,
            city,
            state,
            zipCode,
        ]

        dispatch(addEmployee(employee))
        // modalVisible : true
    }

    return (
        <form>
            <h2>Create Employee</h2>

            <div className='formData'>
                <label className="form-label" htmlFor="firstName">First Name: </label>
                <input className="form-control" type="text" id="first" name="firstName" placeholder='Firstname' onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className='formData'>
                <label className="form-label" htmlFor="lastName">Last Name: </label>
                <input className="form-control" type="text" id="last" name="lastName" placeholder='Lastname' onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className='formData'>
                <label className="form-label" htmlFor="birth">Date of Birth:
                    <DatePicker
                        selected={birthDate}
                        dateFormat='dd/MM/yyyy'
                        onChange={(date) => setbirthDate(date)}
                    />
                </label>
            </div>

            <div className='formData'>
                <label className="form-label" htmlFor="start">Start Date:
                    <DatePicker
                        selected={startDate}
                        name='start'
                        dateFormat='dd/MM/yyyy'
                        onChange={(date) => setStartDate(date)}
                    />
                </label>

            </div>

            <fieldset className='adress-area'>

                <div className='formData'>
                    <label className="form-label" htmlFor="street">Street: </label>
                    <input className="form-control" type="text" id="last" name="street" placeholder='Street' onChange={(e) => setStreet(e.target.value)} />
                </div>

                <div className='formData'>
                    <label className="form-label" htmlFor="city">City: </label>
                    <input className="form-control" type="text" id="last" name="city" placeholder='City' onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className='formData'>
                    <label className="form-label" htmlFor="state"> State :
                    </label>
                    <Dropdown
                        options={option}
                        onChange={(e) => setState(e.value)}
                        placeholder='select a state'
                    />
                </div>

                <div className='formData'>
                    <label className="form-label" htmlFor="zipcode">Zip Code: </label>
                    <input className="form-control" type="number" id="last" name="zipcode" placeholder='Zip Code' onChange={(e) => setZipCode(e.target.value)} />
                </div>
            </fieldset>

            <div className='formData'>
                <label className="form-label" htmlFor='department'> Department :
                    <Dropdown
                        options={allData.departements}
                        onChange={(e) => setDepartment(e.value)}
                        placeholder="Select a department"
                    />
                </label>

            </div>


            <div className="userButtons">
                <button className="btn" onClick={handleEdit} type="button" >Save</button>
            </div>

        </form>
    );
};

export default CreateForm;