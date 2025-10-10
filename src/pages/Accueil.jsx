import "../App.css";
import { Container, Card, Col, Row, Image, ProgressBar } from "react-bootstrap";
import Hero from "../components/Hero";
import JDoe from "../assets/img/john-doe-about.jpg";



const Accueil = ()=>{
    
    return (
        <>
        <Hero />
        <Container className="mt-4 mb-4">
            <Card className="mb-4 cardBox">
                <Row className="text-start box">
                    <Col>
                        <h4 className="fw-bold">A Propos</h4>
                        <hr className="border border-primary border-2 opacity-100 mb-5"/>
                        <Image src={JDoe} fluid title="John Doe" alt="John Doe"/>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat.  
                        </p>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat.  
                        </p>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat.  
                        </p>

                    </Col>

                    <Col>
                        <h4 className="fw-bold">Mes compétences</h4>
                        <hr className="border border-primary border-2 opacity-100 mb-5"/>
                        <h5 className="text-uppercase">html 90%</h5>
                        <ProgressBar variant="danger" now={90} className="mb-4"/>
                        <h5 className="text-uppercase">css3 80%</h5>
                        <ProgressBar variant="info" now={80} className="mb-4"/>
                        <h5 className="text-uppercase">javascript 70%</h5>
                        <ProgressBar variant="warning" now={70} className="mb-4"/>
                        <h5 className="text-uppercase">php 60%</h5>
                        <ProgressBar variant="success" now={60} className="mb-4"/>
                        <h5 className="text-uppercase">react 50%</h5>
                        <ProgressBar variant="primary" now={50} className="mb-4"/>
                    </Col>
                </Row>
            </Card>

        </Container>
        </>
    )
}
export default Accueil;