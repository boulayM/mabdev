import "../App.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Banner from "../assets/img/banner.jpg"
import CardsPortfolio from "../components/CardsPortfolio";

export default function Realisations () {
  return (
    <div>
      <Image src={Banner} fluid className="mt-5"/>
      <Container className="pt-5 text-center">
            <h2 className="fw-bold">Portfolio</h2>
            <p>Voici quelques-unes de mes réalisations</p>
            <Row>
                <Col></Col>
                <Col><hr className="border border-primary border-3 opacity-100 mb-5"/></Col>
                <Col></Col>     
            </Row>
      </Container>
            <CardsPortfolio/>

  </div>

  );
}

