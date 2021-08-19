import React from 'react';
import { Link} from "react-router-dom"
import { Container } from "../Home/style"

const Contact: React.FC = () => {
  return (
    <Container>
      <h1>Contact</h1>
      <Link to="/">Voltar para Home</Link>
    </Container>
  );
}




export default Contact;