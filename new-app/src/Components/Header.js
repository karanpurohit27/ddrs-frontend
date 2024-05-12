import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from "react-icons/fa";
function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/login">DDRS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/reqsell">Rent</Nav.Link>
            <Nav.Link href="/reqbuy">Buy</Nav.Link>
            <Nav.Link href="/docs">Docs</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Nav.Link href="/user">
            <FaUser />
          </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;