import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import logoApp from '../assets/images/logo192.png';

function Header(props) {
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
                        <Nav className="me-auto">
                            <NavLink className='nav-link' to={'/'}>Home</NavLink>
                            <NavLink className='nav-link' to={'/users'}>Manage Users</NavLink>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                <NavLink className='dropdown-item' to="/login">Login</NavLink>
                                <NavLink className='dropdown-item' to="/">Logout</NavLink>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;