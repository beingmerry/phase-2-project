import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img
              alt=''
              src='./logo512.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            ZooWorld
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to=''>
              <Nav.Link>Zoos</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/animals'>
              <Nav.Link>Animals</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/new-animal'>
              <Nav.Link>Add Animal</Nav.Link>
            </LinkContainer>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
// <header className='App-header'>
// <h1>Zoo World</h1>
// </header>
