import { Nav, Navbar, Container, Link } from "react-bootstrap";
import  { Component } from "react";

class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isNavExpanded: false
      };
    
      this.setIsNavExpanded = (isNavExpanded) => {
        this.setState({ isNavExpanded: isNavExpanded });
      }
    
      this.handleClick = (e) => {
        if (this.node.contains(e.target)) {
          // if clicked inside menu do something
        } else {
          // If clicked outside menu, close the navbar.
          this.setState({ isNavExpanded: false });
        }
      }
    }
    componentDidMount() {
      document.addEventListener('click', this.handleClick, false);      
    }
  
    componentWillUnmount() {
      document.removeEventListener('click', this.handleClick, false);
    }
  
    render() {
      return (
        <div ref={node => this.node = node}>
                <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" fixed="top" onToggle={this.setIsNavExpanded} expanded={this.state.isNavExpanded}>
                    <Container>
                        <Navbar.Brand>John Doe</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="ms-auto text-uppercase" variant="underline" >
                                <Nav.Link as={Link} to="/" eventKey="1">Home</Nav.Link>
                                <Nav.Link as={Link} to="/services" eventKey="2">Services</Nav.Link>
                                <Nav.Link as={Link} to="/portfolio" className="nav-link" eventKey="3">Portfolio</Nav.Link>
                                <Nav.Link as={Link} to="/contact" eventKey="4">Contact</Nav.Link>
                                <Nav.Link as={Link} to="/mentionslegales" eventKey="5">Mentions Légales</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

        </div>
      )
    }
}
export default Menu;

