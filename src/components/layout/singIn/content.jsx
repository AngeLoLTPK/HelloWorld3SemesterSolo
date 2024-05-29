import './content.css'

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// imagens 
import Logo from '../../../assets/newWorld.png';
import Globo from '../../../assets/login/GloboSmall.gif';
import ArrowUp from '../../../assets/login/Arrow 1.jpg';
import ArrowDown from '../../../assets/login/Arrow 4.jpg';
import Persona1 from '../../../assets/login/Persona1.png';
import Persona2 from '../../../assets/login/Persona2.png';
import USA from '../../../assets/login/USAflag.png';
import BR from '../../../assets/login/BRflag.png';

const Content = () => {
  return (
    <>

      <Container id='all' >

        {/* imagem da logo do site Hello World */}

        <Row className='d-flex justify-content-center logoLogin' xs={4} md={5} style={{ marginBottom: "40px", }}>
          <figure>
            <Image className='logo' style={{ padding: '0px', minHeight: '200px' }} src={Logo} />
          </figure>

        </Row>

        {/* texto de apresentação do site */}

        <Row id='middleText' >
          <h4>
            Explore, compartilhe, e faça parte de uma comunidade onde cada "Olá" é o início de uma nova jornada. Juntos, estamos construindo uma rede social vibrante e acolhedora. Dê vida ao seu perfil, conecte-se com outros usuários e deixe sua marca no mundo digital do "HELLO WORLD".
          </h4>
        </Row>

        {/* div de testemunho de personas  */}

        <Row style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

          {/* persona 1 */}

          <Col>

            <figure className='figurePersona'>

              <Image src={Persona1} style={{ margin: '0px' }} />

              <figcaption className='textPersona'>Minha jornada no HELLO WORLD tem sido uma verdadeira troca cultural!  </figcaption>

            </figure>

          </Col>

          {/* flechas de rotação */}

          <Col xs lg="2">

            <div> <Image src={ArrowUp} className='arrowUp' /> </div>

            <div> <Image src={ArrowDown} /> </div>

          </Col>

          {/* globo do mundo giff girando */}

          <Col>
            <Image src={Globo} />
          </Col>

          {/* flechas de rotação */}

          <Col xs lg="2">

            <div> <Image src={ArrowUp} className='arrowUp' /> </div>

            <div> <Image src={ArrowDown} /> </div>

          </Col>

          {/* persona 2 */}

          <Col>

            <figure className='figurePersona'>

              <Image src={Persona2} />

              <div className='personaFlagsDiv'>

                


                <figure className='figureFlag'>

                  <Image src={BR}/>

                </figure>

                <figcaption>ENG → PT</figcaption>

                <figure className='figureFlag'>

                  <Image src={USA}/>

                </figure> 

              </div>

              <figcaption className='textPersona'>Conectar-me com amigos americanos me trouxe uma compreensão do mundo. </figcaption>

            </figure>

          </Col>

        </Row>

      </Container>


    </>
  )
};

export default Content;