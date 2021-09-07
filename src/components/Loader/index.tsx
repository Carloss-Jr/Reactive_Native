import React from 'react';
import Lottie from 'react-lottie';
import { Container } from './style';
import animationData from '../../Animation/71379-loader-with-code-000048.json'

const Loader: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }
  return (
    <Container>
      <div>
        <h1>Carregando...</h1>
        <Lottie
          options={defaultOptions}
          width={200}
    	    height={200}
        />
      </div>
    </Container>
  )
}

export default Loader;