import "../App.css";
import { Container, Col, Row, Image } from "react-bootstrap";
import Banner from "../assets/img/banner.jpg"
import CardServices from "../components/CardsServices";

const Services = ()=> {
    return (

        <>
        <Image src={Banner} fluid className="mt-5"/>
        
        <Container className="pt-5 text-center">
            <h2 className="fw-bold">Mon offre de services</h2>
            <p>Voici quelques prestations sur lesquelles je peux intervenir</p>
            <Row>
                <Col></Col>
                <Col><hr className="border border-primary border-3 opacity-100 mb-5"/></Col>
                <Col></Col>     
            </Row>
        </Container>
        <CardServices/>

        </>

    )
}

export default Services;