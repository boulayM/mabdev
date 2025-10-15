import { Card, Button, Container } from "react-bootstrap";
import job from "./CardsPortfolioDetails";


     export default function CardsPortfolio () {

        
        return (
    <div className="container text-center">
      <div className="row">
        {job.map((job) => (
            <div className="col-md-4">
            <Card className="mb-4 AppCard">
                <Card.Img variant="top" src= {job.image} title={job.name} alt={job.alt} style={{width: "100%"}}/>
                <Card.Body>
                <div className="cardtitleBox">
                <Card.Title className="fw-bold text-white">{job.name}</Card.Title>
                </div>
                <Card.Text>
                    <small className="CardText">{job.description}</small>
                </Card.Text>
                <Container>
                <div className="mb-2">
                <Button href= { job.linkbutton } target="blank" className="btn-portfolio">Voir le site</Button><br></br>
                { job.user ? <small className="text-muted">Login: {job.user}</small> : null }
                <br></br>
                { job.user2 ? <small className="text-muted">Login: {job.user2}</small> : null }
                <br></br>
                { job.device ? <small className="text-muted">{job.device}</small> : null }
                <br></br><br></br>
                <a href= { job.linkgithub } target="blank" className= { job.linkEnabled }>
                <i className="bi bi-github" rel="nofollow"><span className="ms-2">Dépot Github</span></i>
                </a>
                </div>
                </Container>
                </Card.Body>
                <Card.Footer>
                    <Container>
                    <img src={job.tool_img} alt="html css logo" title="html css logo" className="me-2" style={{height: "30px"}}/>
                        <small className="text-muted">{job.tool}</small>
                    </Container>
                
                </Card.Footer>
                </Card>
            </div>
        ))}
      </div>
    </div>
  );
    
};
