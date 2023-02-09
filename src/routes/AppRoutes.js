import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import TableUsers from '../components/TableUsers';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';

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
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </>
    );
}

export default AppRoutes;