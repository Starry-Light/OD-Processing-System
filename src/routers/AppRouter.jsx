import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import * as view from '@/views'
import  Navbar  from '../components/common/Navbar.jsx'

function AppRouter() {
    return (

        <>
        <Navbar />
        {/* <div>HELLO TRYING</div> */}

        <Routes>
            <Route 
                path = {ROUTES.STUDENT}

                element = {<view.StudentHome />}
        
            />
            <Route 
                path = {ROUTES.TEACHER}

                element = {<view.TeacherHome />}
    
            />
            <Route 
                path = {ROUTES.LOGIN}

                element = {<view.LoginPage />}
            />
        </Routes>
        </>
    )
}

export default AppRouter