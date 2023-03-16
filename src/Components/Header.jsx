import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Header = () => {
  const navigator = useNavigate();
  return (
    <Navbar bg="danger" className='mb-5' variant="danger" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigator('/')} style={{ cursor: 'pointer', color:'white' }}>
          Family help
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Срочная помощь" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://nasiliu.net/">
                Домашнее насилие
              </NavDropdown.Item>
              <NavDropdown.Item href='tel:+375173001006'>
                <tel>Телефон доверия республиканского <br />
                  центра психологической помощи</tel>
              </NavDropdown.Item>
              <NavDropdown.Item href="tel:+80172630303">
                «Телефон доверия» для подростков
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://pravo.by/">
                Национальный правовой <br />
                Интернет-портал Республики Беларусь
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}