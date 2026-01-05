import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom'
import { BiSolidCartAdd } from "react-icons/bi"

function NavBar() {
 let navigate1 = useNavigate()
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Home"> Home </Nav.Link>
            <Nav.Link as={Link} to="/login/Dear User🤩!!">Login</Nav.Link>
            <Nav.Link as={Link} to="/Products">Products</Nav.Link>
            <Nav.Link as={Link} to="/Signup">Signup</Nav.Link>
          </Nav>
            <Button variant='contained' color='warning' onClick={()=>navigate1('/WishList')} ><BiSolidCartAdd/></Button>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;