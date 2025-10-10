import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import ModalDetails from "./ModalDetails";

const ModalHome = ()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return (
      
    <>
    <div className="pb-2">
      <Button variant="dark" onClick={handleShow}>
        En savoir plus
      </Button>
    </div>

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