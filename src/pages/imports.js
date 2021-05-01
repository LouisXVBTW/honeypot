import { Navbar, Nav} from 'react-bootstrap';
import { Fragment } from 'react';

function Navb() {
  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Dashboard</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/pewpew">Attack Map</Nav.Link>
      <Nav.Link href="/sshdata">SSH Data</Nav.Link>
      <Nav.Link href="/shodan">Shodan Data</Nav.Link>
    </Nav>
    
  </Navbar>
  )
}

function testCal() {
  return(
<Fragment>
  
</Fragment>

)  
}

export {Navb};