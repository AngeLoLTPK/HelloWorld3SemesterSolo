import './sidebar.css'

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from "react-router-dom";

import Button from '../../ui/Button';

const Sidebar = () => {
  return (
  <Container className='all'>

    <Row>

      <Col>

      <h1 className='title'>Login</h1>

      </Col>

    </Row>

    <Row>

        

    </Row>
    
    <Row id='divBottom'>

      <Link to={''}> <Button variant={'login'}>Cadastrar</Button> </Link>

    </Row>

  </Container>
  )
}

export default Sidebar