import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import Logo from '../../../assets/logoBranca.jpg'
import Globo from '../../../assets/GloboSmall.gif'

const Content = () => {
  return (
    <>
  
      <Container>

        <Row>
          <Image src={Logo}/>
        </Row>

        <Row>
          <h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque autem aspernatur distinctio eveniet est ratione iure in expedita magni soluta pariatur facilis quae similique accusantium culpa, rerum illo nihil labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, natus necessitatibus itaque impedit architecto libero quae velit harum error ab magni? Odio magnam beatae corrupti eaque omnis obcaecati, non quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus obcaecati aliquam sequi reprehenderit, at tempore nobis facere? Nisi voluptatem suscipit consectetur veniam fugiat qui molestias quibusdam vel, corporis nulla.
          </h5>
        </Row>

        <Row >

          <Col>
          
          </Col>

          <Col>
            <Image src={Globo}/>
          </Col>

          <Col>
            
          </Col>

        </Row>
        
      </Container>
    
    </>
  )
};

export default Content;