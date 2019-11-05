import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button,  Container,  Row, Col,   Carousel, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"


export default function SingPAge() {
	const [show1, setShow1] = useState(false);
	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);
	const handleClose1Show2 =() => {setShow1(false); setShow2(true)}
	const [show2, setShow2] = useState(false);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);
	const handleC2ose1Show1 =() => {setShow1(true); setShow2(false)}

	var styles={
		p1:{
		  'backgroundImage':'url("../../images/animal-animal-photography-cat-57416 (1).jpg")',
		  'backgroundPosition': "center 70%",
		  'backgroundSize':'contain',
		  'backgroundRepeat': 'no-repeat',
		  'height': '360px'
		},
		p2:{
		  'backgroundImage':'url("../../images/looking-for-future.jpg")',
		  'backgroundPosition': "center 70%",
		  'backgroundSize':'contain',
		  'backgroundRepeat': 'no-repeat',
		  'height': '360px'
		},
		p3:{
		  'backgroundImage':'url("../../images/mother-cat-sleeping-on-sofa-bed.jpg")',
		  'backgroundPosition': "center 70%",
		  'backgroundSize':'contain',
		  'backgroundRepeat': 'no-repeat',
		  'height': '360px'
		},
		carouselcaptionbg:{
			'backgroundColor': 'rgba(0, 0, 0, 0.4)',
		},
		bgCover:{
		  'backgroundPosition': "center center",
		  'backgroundSize':'cover',
		  'backgroundRepeat': 'no-repeat'
		},
	}	
	
	return (


		<div>
			<section className="bg-secondary">
				<div>
					<Container>
						<div className="text-right text-white">
							<FontAwesomeIcon icon={faFacebookSquare}  className="text-center"/>
						</div>
						
					</Container>
				</div>
			</section>
			<section>
				
					<Navbar bg="light" expand="lg" sticky="top">
						<Container>
				          <Navbar.Brand href="#home">關於我們</Navbar.Brand>
				          <Navbar.Toggle aria-controls="basic-navbar-nav" />
				          <Navbar.Collapse id="basic-navbar-nav">
				            <Nav className="mr-auto">
				              <NavDropdown title="很多貓" id="basic-nav-dropdown">
						        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						        <NavDropdown.Divider />
						        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						      </NavDropdown>
				               
				            </Nav>
				            <Nav className="">
				               
				              <Nav.Link href="#home"><Button variant="outline-primary" className="btn-sm" onClick={handleShow1}>登入</Button></Nav.Link>
				              <Nav.Link href="#link"><Button variant="primary" className="btn-sm" onClick={handleShow2}>註冊</Button></Nav.Link>      
				            </Nav>
				          </Navbar.Collapse>
				        </Container> 
				        
			        </Navbar>
			    
			</section>

			<Modal show={show1} onHide={handleClose1}>
		        <Modal.Header closeButton className={'bg-success'}>
		          <Modal.Title>Login</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        	<Form.Group controlId="formName">
					    <Form.Label>姓名</Form.Label>
					    <Form.Control type="text" placeholder="請輸入帳號!!" />
					    <Form.Text className="text-muted">
					      請輸入姓名!!
					    </Form.Text>
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Label>密碼</Form.Label>
					    <Form.Control type="text" placeholder="password!!" />
					    <Form.Text className="text-muted">
					      請輸入密碼!!
					    </Form.Text>
					  </Form.Group>

		        </Modal.Body>
		        <Modal.Footer className={'d-flex'}>
		        	<Button className={'mr-auto'} onClick={handleClose1Show2} >
			        	如果還沒有帳號按此註冊
			        </Button>
		          <Button variant="secondary" onClick={handleClose1}>
		            取消
		          </Button>
		          <Button variant="primary" onClick={handleClose1}>
		            確定
		          </Button>
		        </Modal.Footer>
		      </Modal>

		      <Modal show={show2} onHide={handleClose2}>
		        <Modal.Header closeButton className={'bg-info'}>
		          <Modal.Title>Register</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        	<Row>
		        		<Col md={6}>
							<h1>會員條款</h1>
							<ul>
								<li>
									1.加速促進污染之後工資上次住宅，熱情關鍵。美容印刷寧波提前圖書糖尿病含有堅決長沙開口回應基於幫我能，。
								</li>
								<li>
									1.加速促進污染之後工資上次住宅，熱情關鍵。美容印刷寧波提前圖書糖尿病含有堅決長沙開口回應基於幫我能，。
								</li>
								<li>
									1.加速促進污染之後工資上次住宅，熱情關鍵。美容印刷寧波提前圖書糖尿病含有堅決長沙開口回應基於幫我能，。
								</li>

							</ul>
		        		</Col>
		        		<Col md={6}>
						<Form.Group controlId="formName">
						    <Form.Label>帳號</Form.Label>
						    <Form.Control type="text" placeholder="請輸入帳號!!" />
						    <Form.Text className="text-muted">
						      請輸入姓名!!
						    </Form.Text>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>密碼</Form.Label>
						    <Form.Control type="text" placeholder="password!!" />
						    <Form.Text className="text-muted">
						      請輸入密碼!!
						    </Form.Text>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>確認密碼</Form.Label>
						    <Form.Control type="text" placeholder="password!!" />
						    <Form.Text className="text-muted">
						      請輸入密碼!!
						    </Form.Text>
						  </Form.Group>		        		

		        		</Col>
		        	</Row>
		        	

		        </Modal.Body>
		        <Modal.Footer className={'d-flex'}>
			        <Button className={'mr-auto'} onClick={handleC2ose1Show1}>
			        	如果已有帳號按此登入
			        </Button>
		          <Button variant="secondary" onClick={handleClose2}>
		            取消
		          </Button>
		          <Button variant="primary" onClick={handleClose2}>
		            確定
		          </Button>
		        </Modal.Footer>
		      </Modal>

			<div>
				<Carousel>
				  <Carousel.Item style={styles.p1}>
				  	
				    <Carousel.Caption style={styles.carouselcaptionbg}>
				      <h3 className="font-weight-bold">Second slide label</h3>
				      <p className="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item style={styles.p2}>
				    

				    <Carousel.Caption style={styles.carouselcaptionbg}>
				      <h3 className="font-weight-bold">Second slide label</h3>
				      <p className="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item style={styles.p3}>
				    

				    <Carousel.Caption style={styles.carouselcaptionbg}>
				      <h3 className="font-weight-bold">Second slide label</h3>
				      <p className="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
			</div>
			<div className="bg-info py-3">
				<Container>
					<Row className="my-3">
						<Col md={4} className="text-light">
							<FontAwesomeIcon icon={faHome} size="6x" className="text-center"/>

							<h3 className="font-weight-bold">一切都手上不出</h3> 
							<p>她們法規主任本地下載發佈時間帶來人間唱片英語，水。</p>
						</Col>
						<Col md={4} className="text-light">
							<FontAwesomeIcon icon={faHome} size="6x" className="text-center"/>
							<h3 className="font-weight-bold">一切都手上不出</h3> 
							<p>她們法規主任本地下載發佈時間帶來人間唱片英語，水。</p>
						</Col>
						<Col md={4} className="text-light">
							<FontAwesomeIcon icon={faHome} size="6x" className="text-center"/>
							<h3 className="font-weight-bold">一切都手上不出</h3> 
							<p>她們法規主任本地下載發佈時間帶來人間唱片英語，水。</p>
						</Col>
					</Row>
				</Container>
			</div>
			<section className="bg-light py-3" style={{"position": "relative"}}>
				<Row>
					<Col md={5} 
						 className={styles.bgCover}
						 style={{"backgroundImage": "url(../../images/adorable-animal-animal-photography-1056251.jpg)",
										'position' : 'absolute',
										'top' : '0',
										'bottom' : '0',
										'backgroundPosition': "center center",
										'backgroundSize':'cover',
										'backgroundRepeat': 'no-repeat'
						 }}
					>
						
					</Col>
				</Row>
				<Container>
					<Row className="justify-content-end">
						<Col md={7} style={styles.textmdwhite}>
							<h2>她們法規主任本地下載發佈時間帶來人間唱片英語，水。</h2>
							<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
							<Button variant="primary" className={'mb-3'}>查看更多</Button>
							<Row>
								<Col md={6}>
									<h2>她們法規主任本地下載發佈時間帶來人間唱片英語，水。</h2>
									<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
								</Col>
								<Col md={6}>
									<h2>她們法規主任本地下載發佈時間帶來人間唱片英語，水。</h2>
									<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
			<section className={'bg-light py-3'}>
				<Container >
					<Row className="justify-content-center">
						<h3 className={'font-weight-bold'}>她們法規主任本</h3>
					</Row>
					<Row>
						<Col md={6}>
							<Row className={'mt-3'}>
								<Col md={3}><FontAwesomeIcon icon={faHome} size="6x" className="text-center"/></Col>
								<Col md={9}>
									<h3 className={'font-weight-bold'}>貓貓貓貓貓</h3>
									<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
								</Col>
								
							</Row>
							<Row className={'mt-3'}>
								<Col md={3}><FontAwesomeIcon icon={faHome} size="6x" className="text-center"/></Col>
								<Col md={9}>
									<h3 className={'font-weight-bold'}>貓貓貓貓貓</h3>
									<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
								</Col>
							</Row>
						</Col>
						<Col md={6}>
							<Row className={'mt-3'}>
								<Col md={3}><FontAwesomeIcon icon={faHome} size="6x" className="text-center"/></Col>
								<Col md={9}>
									<h3 className={'font-weight-bold'}>貓貓貓貓貓</h3>
									<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
								</Col>
							</Row>
							<Row className={'mt-3'}>
								<Col md={3}><FontAwesomeIcon icon={faHome} size="6x" className="text-center"/></Col>
								<Col md={9}>
									<h3 className={'font-weight-bold'}>貓貓貓貓貓</h3>
									<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>

			<section style={{"position": "relative"}}>
				
					<Container >
						
						<Col md={5} style={{'z-index': '10'}}>
							<Row >
								<h1>貓貓貓貓貓</h1>
								<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
							</Row>
							<Row>
								<Col md={3}>
									<p>貓貓貓貓貓</p>
								</Col>
								<Col md={9}>
									<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
								</Col>
							</Row>
							<Row>
								<Col md={3}>
									<p>貓貓貓貓貓</p>
								</Col>
								<Col md={9}>
									<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
								</Col>
							</Row>
							<Row>
								<Col md={3}>
									<p>貓貓貓貓貓</p>
								</Col>
								<Col md={9}>
									<p>規劃早上百萬應當等待網際簡單之外奇怪，筆記本手上記憶西方流程外面第二財產每個人外貿沒，好評付款大全。</p>
								</Col>
							</Row>
						</Col>	

					</Container>
					<Row className={'justify-content-end'}>
						<Col md={6}  
							style={{"backgroundImage": "url(../../images/adorable-animal-animal-photography-1056251.jpg)",
											'position' : 'absolute',
											'top' : '0',
											'bottom' : '0',
											'backgroundPosition': "center center",
											'backgroundSize':'cover',
											'backgroundRepeat': 'no-repeat'
							 }}
						>
						
						</Col>
					</Row>
				
			</section>
			<section className={'mt-3'}>
				<Container>
					<Row>
						<Col md={6}>
							<iframe 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14560.366981572672!2d120.60848265!3d24.168514999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b6f18a6783fa3b!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5Lit5b2w5oqV5YiG572y77yI6Ie65Lit6IG36KiT5bGA77yJ!5e0!3m2!1szh-TW!2stw!4v1571193646731!5m2!1szh-TW!2stw"
							 width="100%" 
							 height="450" 
							 frameborder="0" 
							 style={{'border':'0'}} 
							 allowfullscreen=""></iframe>
						</Col>
						<Col md={6}>
							<Form>
							  <Form.Group controlId="formName">
							    <Form.Label>姓名</Form.Label>
							    <Form.Control type="text" placeholder="Enter name" />
							    <Form.Text className="text-muted">
							      請輸入姓名!!
							    </Form.Text>
							  </Form.Group>

							  <Form.Group controlId="formBasicPassword">
							    <Form.Label>電話</Form.Label>
							    <Form.Control type="text" placeholder="phon" />
							    <Form.Text className="text-muted">
							      請輸入電話!!
							    </Form.Text>
							  </Form.Group>
							  <Form.Group controlId="formBasicEmail">
							    <Form.Label>Email address</Form.Label>
							    <Form.Control type="email" placeholder="Enter email" />
							    <Form.Text className="text-muted">
							      請輸入Email!!
							    </Form.Text>
							  </Form.Group>
							  <Form.Group controlId="formBasicEmail">
							    <Form.Label>Email address</Form.Label>
							    <Form.Control type="number" placeholder="Enter email" />
							    <Form.Text className="text-muted">
							      請輸入人數!!
							    </Form.Text>
							  </Form.Group>
							  <Form.Group controlId="formBasicCheckbox">
							    <Form.Check type={'radio'} id={`check-api-${'radio'}`}>
							        <Form.Check.Input type={'radio'} isValid />
							        <Form.Check.Label>{`需要素食`}</Form.Check.Label>
							        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
							      </Form.Check>
							      <Form.Check type={'radio'} id={`check-api-${'radio'}`}>
							        <Form.Check.Input type={'radio'} isValid />
							        <Form.Check.Label>{`不需要素食`}</Form.Check.Label>
							        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
							      </Form.Check>
							  </Form.Group>
							  <div className={'text-right'}>
							  	 <Button variant="primary" type="submit">
								    確定
								  </Button>
								  <Button variant="outline-primary">
								 	取消
								  </Button>

							  </div>
							 
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
			<section >
				
					<Row className={'py-3'}>
						<Col md={6} 
							style={{"backgroundImage": "url(../../images/adorable-animal-animal-photography-1056251.jpg)",
											
											'backgroundPosition': "center center",
											'backgroundSize':'cover',
											'backgroundRepeat': 'no-repeat'
							 }}
						>
							<Row>
								<Col md={8} className={'text-light'}>
									<small>加入我們</small>
									<h1>插件我家版權樣子怎樣樣子怎樣生子怎樣生。</h1>
									<p>文明共和國男生幻想不可能本月，讓人信號異常如此優惠新浪股票道路痛苦技巧，隨後首次完了動態主體商，其。</p>
									<Button>
										加入我們
									</Button>

								</Col>
								<Col md={4}></Col>
							</Row>
						</Col>
						<Col md={6} 
							style={{"backgroundImage": "url(../../images/mother-cat-sleeping-on-sofa-bed.jpg)",
											
											'backgroundPosition': "center center",
											'backgroundSize':'cover',
											'backgroundRepeat': 'no-repeat'
							 }}
						>
							<Row>
								<Col md={8} className={'text-light'}>
									<small>加入我們</small>
									<h1>插件我家版權樣子怎樣樣子怎樣生子怎樣生。</h1>
									<p>文明共和國男生幻想不可能本月，讓人信號異常如此優惠新浪股票道路痛苦技巧，隨後首次完了動態主體商，其。</p>
									<Button>
										加入我們
									</Button>

								</Col>
								<Col md={4}></Col>
							</Row>
						</Col>
					</Row>
				

			</section>
			<section>
				<Container>
					<Nav
					  activeKey="/singpage"
					  onSelect={selectedKey => alert(`selected ${selectedKey}`)}

					>
					  <Nav.Item>
					    <Nav.Link href="/singpage">版權所有</Nav.Link>
					  </Nav.Item>
					  <Nav.Item>
					    <Nav.Link eventKey="link-1">facebook</Nav.Link>
					  </Nav.Item>
					  <Nav.Item>
					    <Nav.Link eventKey="link-2">twitter</Nav.Link>
					  </Nav.Item>
					  <Nav.Item>
					    <Nav.Link eventKey="link-2">購物網</Nav.Link>
					  </Nav.Item>
					  
					</Nav>


				</Container>
				
			</section>
		</div>
	)
}