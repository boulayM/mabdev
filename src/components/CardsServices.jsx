import { Card, Container } from "react-bootstrap";
import services from "./CardsServices Details";

    export default function CardsServices () {
         return (
            services.map((service) => (
    <Card className="mb-5 mx-3 servicesCard">
          <Card.Body>
            <Container className="mb-3 servicesContainer">
              <div className="servicesBox">
                <Card.Img src={service.image} alt={service.name} title={service.name} className="me-2"/>
              </div>
              <div className="ms-4 servicesText" style={{ whiteSpace: "pre-line" }}>
                {service.description}
              </div>
            </Container>
          </Card.Body>
        </Card>
            ))
            );
    };

