import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from 'react-dom';
import { Outlet, Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Boostrap </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/topicos22-main/public/example">Home</Nav.Link>
            <Nav.Link as={Link} to="/topicos22-main/public/first">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <section>
      <Outlet></Outlet>
    </section>
    </>
  );
}

export default NavBar;

  // if (document.getElementById('application')) {
  //      ReactDOM.render(<NavBar />, document.getElementById('application'));
  //  }
