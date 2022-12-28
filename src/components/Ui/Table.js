import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { useSelector } from 'react-redux';


const Table = () => {

    //on stocke ds une variable profileData l'ensemble de notre store
    const employeesList = useSelector((state) => state.employee.employees)

    //simple column definitions pointing to flat data
    const columns = useMemo(
        () => [
            {
                header: 'First Name',
                accessorKey: 'firstName',
            },
            {
                header: 'Last Name',
                accessorKey: 'lastName',
            },
            {
                header: 'Start Date',
                accessorKey: 'startDate',
            }, {
                header: 'Department',
                accessorKey: 'department',
            }, {
                header: 'Date of Birth',
                accessorKey: 'birthDate',
            }, {
                header: 'Street',
                accessorKey: 'street',
            }, {
                header: 'City',
                accessorKey: 'city',
            }, {
                header: 'State',
                accessorKey: 'states',
            }, {
                header: 'Zip Code',
                accessorKey: 'zipCode',
            },
        ],
        [],
    )

    return (
        <div className='table'>
            <MaterialReactTable
                columns={columns}
                data={employeesList}
                enableDensityToggle={false}
                enableFullScreenToggle={false}
            />
        </div>
    );
};

export default Table;