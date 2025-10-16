import "./App.css";
import topFunction from "./assets/scripts";
import { Route, Routes, Link } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Realisations from "./pages/Portfolio";
import Accueil from "./pages/Accueil";
import MentionsLegales from "./pages/MentionsLegales";


export default function App () {


    return (
        <div>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" fixed="top" className="mb-4">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/">
                            <img
                            alt="logo MabDev"
                            src="/mabdev.png"
                            className="d-inline-block align-top pr-3"
                            />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto text-uppercase" variant="underline">
                                <Nav.Link as={Link} to="/" eventKey="1" id="navHome" onClick={topFunction}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/services" eventKey="2" onClick={topFunction}>Services</Nav.Link>
                                <Nav.Link as={Link} to="/portfolio" eventKey="3" onClick={topFunction}>Portfolio</Nav.Link>
                                <Nav.Link as={Link} to="/contact" eventKey="4" onClick={topFunction}>Contact</Nav.Link>
                                <Nav.Link as={Link} to="/mentionslegales" eventKey="5" onClick={topFunction}>Mentions Légales</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
            
            </main>

            <Routes>
                <Route path="/" element = {<Accueil/>}></Route>
                <Route path="services" element = {<Services/>}></Route>
                <Route path="contact" element = {<Contact/>}></Route>
                <Route path="portfolio" element = {<Realisations/>}></Route>
                <Route path="mentionslegales" element = {<MentionsLegales/>}></Route>
            </Routes>

            <footer>
                <Container fluid>
                    <Row className = "bg-dark text-light p-4">
                        <Col className="mx-5 mb-4 colFooter">
                            <h3>Marc Boulay</h3>
                            <ul className="list-group list-unstyled">
                                <li>158 rue Fabri de Peiresc</li>
                                <li>34080 Montpellier, France</li>
                                <li>06 46 60 99 31</li>
                                <li>macboulay2@gmail.com</li>
                            </ul>
                            <a href="https://github.com/boulayM" target="blank" className="link-light"><i className="bi bi-github fs-2 icone" rel="nofollow"></i></a>
                            <a href="https://www.linkedin.com/in/marcboulayfr/" target="blank" className="link-light ms-3"><i className="bi bi-linkedin fs-2 icone" rel="nofollow"></i></a>
                        </Col>
                        <Col className="mx-5 mb-4 colFooter">
                        <h3>Liens utiles</h3>
                            <ul className="list-group list-unstyled">
                                <Link to="/" className="nav-link linkFooter" onClick={topFunction}>Home</Link>
                                <Link to="/services" className="nav-link linkFooter" data-target="navServices" onClick={topFunction}>Services</Link>
                                <Link to="/portfolio" className="nav-link linkFooter" data-target="navPortfolio" onClick={topFunction}> Portfolio</Link>
                                <Link to="/contact" className="nav-link linkFooter" data-target="navContact" onClick={topFunction}>Contact</Link>
                                <Link to="/mentionslegales" className="nav-link linkFooter" data-target="navMentions" onClick={topFunction}>Mentions Légales</Link>
                            </ul>                        
                        </Col>
                        <Col className="mx-5 mb-4 colFooter">
                        <h3>Mes dernières réalisations</h3>
                            <ul className="list-group list-unstyled">
                                <a href="https://mabdev.alwaysdata.net/html/" className="footerLink" target="blank">HTML-CSS</a>
                                <a href="https://www.figma.com/proto/OLFcDsDWZdD4eE9z6yzGRA/Trouve-ton-artisan?node-id=5-206&p=f&t=C3iCVYohfvkTwzP9-1&scaling=scale-down&content-scaling=fixed&page-id=5%3A205&starting-point-node-id=5-206" className="footerLink" target="blank">Maquettage</a>
                                <a href="https://api-pp-russel.onrender.com" className="footerLink" target="blank">API Express</a>
                                <a href="https://site-artsans.onrender.com" className="footerLink" target="blank">Site React</a>
                                <a href="https://mabdev.alwaysdata.net/klaxon/templates/accueil.php" className="footerLink" target="blank">API restfull PHP</a>
                                <a href="https://mabdev.alwaysdata.net/infographie/" className="footerLink" target="blank">Porfolio WorPress</a>
                            </ul>         
                        </Col>
                    </Row>
                </Container>

            </footer>
            
        </div>
    );
}

