import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {logo } from'../assets'
import {navLinks} from '../constants'
import "../App.css"


const NavbarComponent = () => {
    return (
           
 <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> 
        <img 
            src={logo} 
            alt="hoobank" 
            className='logo' 
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
          <Nav >
            {
                navLinks.map((nav, i)=> (
                    <Nav.Link className='font-white' href={`#${nav.id}`} key={i}>{nav.title}</Nav.Link>

                ))
            }
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavbarComponent;