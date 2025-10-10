import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import ModalDetails from "./ModalDetails";

const ModalHome = ()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return (
      
    <>
      <Button variant="dark" onClick={handleShow} className="mb-2">
        En savoir plus
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className = "bg-dark text-light" closeButton  data-bs-theme = "dark">
          <Modal.Title>Mon profil Github</Modal.Title>
        </Modal.Header>
        <Modal.Body className = "bg-dark text-light">

        <ModalDetails />

        </Modal.Body>
        <Modal.Footer className = "bg-dark text-light">
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}
export default ModalHome;