import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '@/feature/employeeSlice.slice'

export const store = configureStore({
    reducer: {
        employee: employeesReducer,
    }
})