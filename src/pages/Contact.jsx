import "../App.css";
import { Container, Card, Col, Row } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import Coord from "../components/Coordonnees";

const Contact = ()=> {
    return (


    <Container className="mt-5 pt-5 text-center">

        <h1 className="fw-bold">Contact</h1>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        <Row>
            <Col></Col>
            <Col><hr className="border border-primary border-3 opacity-100 mb-5"/></Col>
            <Col></Col>     
        </Row>

            <Row className="text-start">
                <Col className="mb-4">
                    <h4 className="fw-bold">Formulaire de contact</h4>
                    <hr className="border border-primary border-2 opacity-100 mb-5"/>
                    <ContactForm />
                </Col>

                <Col>
                    <h4 className="fw-bold">Mes coordonnées</h4>
                    <hr className="border border-primary border-2 opacity-100 mb-5"/>
                    <Coord />
                    <div className="mt-2 box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7182585661126!2d3.841355275890172!3d43
                    .61960857110369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6ae8d3e19c6fd%3A0x86705e75a1bc42d6!2s158
                    %20Rue%20Fabri%20de%20Peiresc%2C%2034080%20Montpellier!5e1!3m2!1spt-BR!2sfr!4v1759916290645!5m2!1spt-BR!2sfr" 
                    width="600" height="450" styleName="border:0;" allowfullscreen="" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" title="adresse"></iframe>
                    </div>

                </Col>
            </Row>

        
    </Container>

    )
}

export default Contact;