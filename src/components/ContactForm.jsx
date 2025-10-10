import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          alert('message sent successfully...');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <Form ref={form} onSubmit={sendEmail}>
        <Form.Control type='text' placeholder="Votre nom" className="mb-2" name='name' required/>
        <Form.Control type="email" placeholder="Votre adresse email" aria-describedby="votre adresse email" className="mb-2" name='email' required/>
        <Form.Control type="phone" placeholder="Votre numéro de téléphone" aria-describedby="Votre numéro de téléphone" className="mb-2" name='phone' required/>
        <Form.Control placeholder="Sujet" aria-describedby="sujet" className="mb-2" name='subject' required/>
        <Form.Control as="textarea" placeholder="Votre message" aria-describedby="votre message" rows={15} className="mb-2" name='message' required/>
        <div class="d-grid justify-content-center">
            <Button variant="primary" type="submit" className="align-center" id='input-submit' value={"Send"}>
            Envoyer
            </Button>
        </div>
    </Form>
  );
}

export default ContactForm;