import React from 'react';
import { Link } from "react-router-dom"
import { Container } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Link to="/contact"> Acessar página de contatos</Link>
    </Container>  
  );
}

export default Home;