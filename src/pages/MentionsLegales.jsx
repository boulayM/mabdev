import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Coord from '../components/Coordonnees';

function MentionsLegales() {
  return (

    <>
    <Container className="mt-5 pt-5 text-center">

        <h1 className="fw-bold">Mentions légales</h1>
        <Row>
            <Col></Col>
            <Col><hr className="border border-primary border-3 opacity-100 mb-5"/></Col>
            <Col></Col>     
        </Row>
    </Container>

    <Container className='mb-5'>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Editeur du site</Accordion.Header>
        <Accordion.Body>
          <h3>Marc Boulay</h3>
          <Coord />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeurs</Accordion.Header>
        <Accordion.Body>
          <h2 className="fw-bold">Render</h2>
          <p>525 Brannan St, San Francisco, CA 94107</p>
          <i class="bi bi-globe"><a href='https://render.com' target='blank'>  www.render.com</a></i>
          <p> </p>
          <h2 className="fw-bold">Alwaysdata</h2>
          <p>91 Faubourg St Honoré, 75008 Paris</p>
          <i class="bi bi-globe"><a href='https://www.alwaysdata.com/' target='blank'>  www.alwaysdata.com</a></i>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Crédits</Accordion.Header>
        <Accordion.Body>
          <h3 className="fw-bold">Crédits</h3>
          <p>Ce site a été réalisé par Marc Boulay, étudiant du <a href='https://www.centre-europeen-formation.fr/' target='blank'>Centre Européen de Formation</a> et basé sur le modèle proposé par l'institution.</p>
          <p><em>Les images utilisées sur ce site sont libres de droits et ont été obtenues en partie sur le site <a href='https://pixabay.com/fr/' target='blank'>Pixabay</a></em></p>
          <em>La favicon de ce site a été crée par Marc Boulay</em>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    </>
  );
}

export default MentionsLegales;