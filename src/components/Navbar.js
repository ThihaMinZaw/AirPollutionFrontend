import './styles/Navbar.scss'

import {Navbar,Nav} from 'react-bootstrap'


const NavbarReact = ()=>{
    
    
    return (
        <div className="navigation">
        <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/home">AirQuality </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/predictions">Future Predictions</Nav.Link>
            <Nav.Link href="/references">References</Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Navbar></div>
    )
}

export default NavbarReact;