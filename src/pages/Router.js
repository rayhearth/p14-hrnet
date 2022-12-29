import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Layout, Home, CreateEmployee, CurrentEmployees } from '../pages/index'
import Error from '../_utils/Error'

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/create-employee" element={<CreateEmployee />} />
                <Route path="/current-employee" element={<CurrentEmployees />} />

                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default Router;