import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navbarmain2() {
  return (
    <Navbar expand="lg" variant='dark' className="bg-dark">
      <Container>
        <Navbar.Brand >
          <img alt="" src="b-letter.png" width='30' height='30' className="d-inline-block align-top">
          </img>
          BetOrPlay.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About us</Nav.Link>
            <Nav.Link>Bet now!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}