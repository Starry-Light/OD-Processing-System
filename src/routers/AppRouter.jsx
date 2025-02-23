import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import * as view from '@/views'
import  Navbar  from '../components/common/Navbar.jsx'
import Mentees from '../views/TeacherHome/mentees.jsx'
import Students from '../views/TeacherHome/students.jsx'

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
            <Route 
                path = {ROUTES.MENTEES}

                element = {<Mentees />}
            />
            <Route 
                path = {ROUTES.STUDENTS}

                element = {<Students />}
            />
        </Routes>
        </>
    )
}

export default AppRouter