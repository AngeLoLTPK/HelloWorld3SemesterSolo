import './content.css'

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../../assets/newWorld.png';
import Globo from '../../../assets/login/GloboSmall.gif';
import ArrowUp from '../../../assets/login/Arrow 1.jpg';
import ArrowDown from '../../../assets/login/Arrow 4.jpg';
import Persona1 from '../../../assets/login/Persona1.png';
import Persona2 from '../../../assets/login/Persona2.png';

const Content = () => {
  return (
    <>

      <Container id='all'>

        <Row className='d-flex justify-content-center logoLogin' xs={4} md={5} style={{ marginBottom: "40px", }}>
          <Image className='logo' style={{ padding: '0px', minHeight: '200px' }} src={Logo} />
        </Row>


        <Row id='middleText' >
          <h4>
            Explore, compartilhe, e faça parte de uma comunidade onde cada "Olá" é o início de uma nova jornada. Juntos, estamos construindo uma rede social vibrante e acolhedora. Dê vida ao seu perfil, conecte-se com outros usuários e deixe sua marca no mundo digital do "HELLO WORLD".
          </h4>
        </Row>



        <Row style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

          <Col>
          
            <figure>

              <Image src={Persona1} style={{ margin: '0px' }} />
              <figcaption>Minha jornada no HELLO WORLD tem sido uma verdadeira troca cultural! Conectar-me com amigos americanos me trouxe uma compreensão mais profunda da diversidade e riqueza do mundo. </figcaption>

            </figure>

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

            <figure>

              <Image src={Persona2} />
              <figcaption>Minha jornada no HELLO WORLD tem sido uma verdadeira troca cultural! Conectar-me com amigos americanos me trouxe uma compreensão mais profunda da diversidade e riqueza do mundo. </figcaption>

            </figure>

          </Col>

        </Row>

      </Container>


    </>
  )
};

export default Content;