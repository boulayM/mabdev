import "../App.css";
import { Container, Card, Image, ProgressBar } from "react-bootstrap";
import Hero from "../components/Hero";
import apropos from "../assets/img/apropos.jpg";



const Accueil = ()=>{
    
    return (
        <>
        <Hero />
        <Container className="mt-4 mb-4">
            <Card className="mb-4 cardBox">
                        <h4 className="fw-bold">A Propos</h4>
                        <hr className="border border-primary border-2 opacity-100"/>
                        <Image src={apropos} fluid title="Marc Boulay" alt="Marc Boulay"className="img-fluid rounded"/>
                        <p className="mt-2">
                            Né au Brésil, j’ai fait mes études au Lycée Pasteur de São Paulo où j’ai obtenu mon baccalauréat 
                            (académie de Poitiers). À la suite de mes études à l’école des Beaux Arts, j’ai travaillé dans 
                            les décors pour la télévision et le théâtre. Au début des années 2000 j’ai suivi une formation 
                            dans les logiciels d’édition graphique (CorelDraw, Photoshop, Flash et PageMaker) ce qui m’a permis 
                            de travailler dans le secteur de la publicité puis, à mon compte pendant de longues années, dans le 
                            marché de l’infographie (feuillets publicitaires, création de logos, programmation visuelle …). Maitrise
                            de photoshop et CorelDraw.
                        </p>
                        <p className="mt-2">
                            Rentré définitivement en France je me lance début 2025 dans une reconversion vers les métiers du numérique
                            en rejoignant le cours Developpeur Web et Web Mobile (Full Stack) du Centre Européen de Formation. À l'écoute
                            des nouvelles technologies, notament pour ce qui est de l'apport de l'IA dans le développement web. 
                        </p>
                        <p className="mt-2">
                            Je suis actuellement à la recherche d’un stage me permettant de découvrir les routines du métier, développer 
                            mes compétences et me permettre l’entrée dans le marché du travail ainsi que de préparer mon examen du titre professionnel.  
                        </p>
                        <p className="mt-2">
                            Vous trouverez ici mon portfolio avec quelques exemples de développement front end et back end 
                            ainsi que les dépôts GitHub correspondants.
                        </p>
</Card>
            <Card className="mb-4 cardBox">

                        <h4 className="fw-bold">Mes compétences</h4>
                        <hr className="border border-primary border-2 opacity-100"/>
                        <h5 className="text-uppercase">html 90%</h5>
                        <ProgressBar variant="danger" now={90} className="mb-2"/>
                        <h5 className="text-uppercase">css 80%</h5>
                        <ProgressBar variant="info" now={80} className="mb-2"/>
                        <h5 className="text-uppercase">javascript 70%</h5>
                        <ProgressBar variant="warning" now={70} className="mb-2"/>
                        <h5 className="text-uppercase">php 60%</h5>
                        <ProgressBar variant="success" now={60} className="mb-2"/>
                        <h5 className="text-uppercase">react 70%</h5>
                        <ProgressBar variant="primary" now={70} className="mb-2"/>
                        <h5 className="text-uppercase">express 50%</h5>
                        <ProgressBar variant="dark" now={50} className="mb-2"/>
                        <h5 className="text-uppercase">SQL 50%</h5>
                        <ProgressBar variant="secondary" now={50} className="mb-2"/>
            </Card>
        </Container>
        </>
    )
}
export default Accueil;