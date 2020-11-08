import './styles/Navbar.scss'

import {Navbar,Nav} from 'react-bootstrap'


const NavbarReact = ()=>{
    
    
    return (
        <div className="navigation">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">AirQuality </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#1">Home</Nav.Link>
            <Nav.Link href="#2">Learn</Nav.Link>
            <Nav.Link href="#3">Future Predictions</Nav.Link>
            <Nav.Link href="#4">References</Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Navbar></div>
    )
}

export default NavbarReact;