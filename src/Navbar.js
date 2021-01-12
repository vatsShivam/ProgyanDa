import { Navbar ,Nav} from 'react-bootstrap';
function Navigation() {
    return(
        <div style={{marginTop:"1px"}}>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">LYNK</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  </Navbar.Collapse>
</Navbar>
</div>
    )
}

export default Navigation;
