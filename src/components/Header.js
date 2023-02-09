import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logoApp from '../assets/images/logo192.png';
import { doLogout } from '../redux/actions/userAction';

function Header(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector(state => state.user.account);

    const handleLogout = () => {
        dispatch(doLogout());
    };

    useEffect(() => {
        if (account && account.auth === false) {
            navigate('/');
            toast.success("Log out successfully!");
        }
    }, [account]);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logoApp} width='30' height='30' className='d-inline-block align-top' alt='...'></img>
                        Pham Chu Duong
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {(account && account.auth || window.location.pathname === '/') &&
                            <>
                                <Nav className="me-auto">
                                    <NavLink className='nav-link' to={'/'}>Home</NavLink>
                                    <NavLink className='nav-link' to={'/users'}>Manage Users</NavLink>
                                </Nav>
                                <Nav>
                                    {account && account.email && <span className='nav-link'>Welcome {account.email}</span>}
                                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                                        {account && !account.auth
                                            ? <NavDropdown.Item onClick={() => navigate('/login')}>Login</NavDropdown.Item>
                                            : <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
                                        }
                                    </NavDropdown>
                                </Nav>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;