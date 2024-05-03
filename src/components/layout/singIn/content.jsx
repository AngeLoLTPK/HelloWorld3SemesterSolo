import './content.css'

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../../assets/logoBranca.jpg';
import Globo from '../../../assets/GloboSmall.gif';
import ArrowUp from '../../../assets/Arrow 1.jpg';
import ArrowDown from '../../../assets/Arrow 4.jpg';
import Persona1 from '../../../assets/Persona1.png';
import Persona2 from '../../../assets/Persona2.png';

const Content = () => {
  return (
    <>

      <Container fluid>

        <Row className='d-flex justify-content-center logoLogin' xs={4} md={5} style={{ marginBottom: "40px", marginTop: "60px", }}>
          <Image className='logo' style={{ padding: '0px', minHeight: '150px' }} src={Logo} />
        </Row>

      </Container>


      <Container >

        <Row style={{ marginBottom: "100px" }}>
          <h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque autem aspernatur distinctio eveniet est ratione iure in expedita magni soluta pariatur facilis quae similique accusantium culpa, rerum illo nihil labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, natus necessitatibus itaque impedit architecto libero quae velit harum error ab magni? Odio magnam beatae corrupti eaque omnis obcaecati, non quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit..
          </h5>
        </Row>

      </Container>

      <Container>

        <Row style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

          <Col>

           <Image src={Persona1} style={{margin: '0px'}}/> 

          </Col>

          <Col>

            <div> <Image src={ArrowUp} className='arrowUp' /> </div>

            <div> <Image src={ArrowDown} /> </div>

          </Col>

          <Col>
            <Image src={Globo} />
          </Col>

          <Col>

            <div> <Image src={ArrowUp} className='arrowUp' /> </div>

            <div> <Image src={ArrowDown} /> </div>

          </Col>

          <Col>

            <div> <Image src={Persona2} className='arrowUp' /> </div>

          </Col>

        </Row>

        </Container>  

    
    </>
  )
};

export default Content;