import React, { useState } from 'react';
import { Link} from "react-router-dom"
import { Container } from "./style"
interface IData {
  name: string;
  email: string;
}


const Contact: React.FC = () => {
  const [ data, setData ] = useState<IData>({} as IData);
  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>
        Name: {data?.name}
        Email: {data?.email}
        <div className="card">
          <form onSubmit={ () => {} }>
            <input 
              type="text" 
              placeholder="nome"
              onChange={ e  => setData({ ...data, name: e.target.value })} 
              />
            <input 
              type="text" 
              placeholder="Email" 
              onChange={ e => setData({ ...data, email: e.target.value })}
              />
            <input type="submit" placeholder="Cadastrar" />
          </form>
        </div>
        <Link to="/">Voltar para Home</Link>
      </div>
    </Container>
  );
}




export default Contact;