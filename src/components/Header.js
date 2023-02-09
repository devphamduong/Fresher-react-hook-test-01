import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logoApp from '../assets/images/logo192.png';

function Header(props) {
    const navigate = useNavigate();
    const [hideHeader, setHideHeader] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/');
        toast.success("Log out successfully!");
    };

    // useEffect(() => {
    //     if (window.location.pathname === '/login') {
    //         setHideHeader(true);
    //     }
    // }, []);

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
                        {(!hideHeader || window.location.pathname === '/') &&
                            <>
                                <Nav className="me-auto">
                                    <NavLink className='nav-link' to={'/'}>Home</NavLink>
                                    <NavLink className='nav-link' to={'/users'}>Manage Users</NavLink>
                                </Nav>
                                <Nav>
                                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={() => navigate('/login')}>Login</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
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