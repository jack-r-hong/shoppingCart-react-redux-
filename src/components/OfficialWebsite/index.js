import React from 'react';
import { Navbar, Nav,  Button,  Container, Jumbotron, Row, Col, Card, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var styles ={
  Jumbotron:{
  'background-image':'url("../../images/bride-clouds-daylight-949224.jpg")',
  'background-position': "center 70%",
  'background-attachment':'fixed',
  'background-size':'70% 360px',
  'heigth': '360px'
  }
  
}

export default function OfficialWebsite(){
  return(

    <div>
      <Container>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="#home">WEDDING</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                   
            </Nav>
            <Nav className="">
              <Nav.Link href="#home">彩妝造型</Nav.Link>
              <Nav.Link href="#link">婚禮紀錄</Nav.Link>  
              <Nav.Link href="#home">主題攝影</Nav.Link>
              <Nav.Link href="#link">婚紗禮服</Nav.Link>      
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <Jumbotron style={styles.Jumbotron}>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="">Learn more</Button>
          </p>
        </Jumbotron>

        <Row>
          <Col md="4" py="3">
            <Alert className="text-light bg-secondary">
              <ul>
                <li className="h5 ">湖南也不文化有時市政</li>
                <li className="h5 ">老人商家興奮開通電器</li>
                <li className="h5 ">今天石油審批域名宣傳</li>
              </ul> 
            </Alert>
           
          </Col>
          <Col md="8" >
            
              <h3 className="text-secondary h3 font-weight-bold">湖南也不文化有時市政</h3>
              
              <p className="font-weight-bold">不肯實行興奮時間仍然沒有什麼上升雖然記錄突然創建學，放下吉林病毒材料成績製品俱樂部體現我只這樣道理報告日本，飲食鐵通歡迎您各類學者零售平方米數據面議殺人哪些趨勢醫生，創造重量研究打開排名業主承諾，書記以前瞬間海南包括主機有時計算請教一，公安這是儘量情感規定幾乎不詳孩子青島本報貼圖正式右鍵，才會課程我家見面接着日韓不在發出新聞網當地案件難。</p>
            
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <Card>
                <Card.Img variant="top" src="../../images/beautiful-bloom-blooming-540522.jpg" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col md="3">
            <Card>
                <Card.Img variant="top" src="../../images/beautiful-bloom-blooming-540522.jpg" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col md="3">
            <Card>
                <Card.Img variant="top" src="../../images/beautiful-bloom-blooming-540522.jpg" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col md="3">
            <Card>
                <Card.Img variant="top" src="../../images/beautiful-bloom-blooming-540522.jpg" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        
      </Container>
      <Alert  className="bg-dark" >
        <h5 className="text-center text-light py-3" >婚禮公司版權所有 2019</h5>
      </Alert>
    </div>
  )
}


