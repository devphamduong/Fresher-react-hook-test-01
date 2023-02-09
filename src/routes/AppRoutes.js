import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import TableUsers from '../components/TableUsers';
import PrivateRoute from './PrivateRoute';

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/users' element={
                    <PrivateRoute>
                        <TableUsers />
                    </PrivateRoute>
                }></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </>
    );
}

export default AppRoutes;