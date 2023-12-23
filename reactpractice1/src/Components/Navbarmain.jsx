import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
     

export default function Navbarmain(){
    return(
        <>
        <Nav className='bg-dark justify-content-center'>
        <Navbar.Brand >
          <img alt="" src="b-letter.png" width='30' height='30' className="d-inline-block align-top">
          </img>
        </Navbar.Brand>
            <Nav.Item>
                <Nav.Link href="/">Main page</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href= "/aboutus" eventKey="link-1">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
        
    );
}