import Container from "react-bootstrap/esm/Container";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
export default function Home(){
    return(
        <Container fluid>
            <Row>
                <Col>
                <h1 class=' fs-1 text-center'>Welcome to BetOrPlay.com</h1>
                <p class='text-center fst-italic'>Here you can bet all different games in all sports</p>
                </Col>
            </Row>
            <Row className='justify-content-md-center'>
                <Col xs={8} >
                <Carousel>
                    <Carousel.Item>
                    <img
                     className="d-block w-100"
                    src="pl.jpeg"
                    alt=""
        />
                        <Carousel.Caption>
                            <h3>Best Premier League Results</h3>
                            <p>Find all Premier League Results and win here!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                     className="d-block w-100"
                    src="miniatura-la-liga.png"
                    alt=""
        />
                        <Carousel.Caption>
                            <h3>Best La Liga Results</h3>
                            <p>Find all La Liga Results and win here!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                     className="d-block w-100"
                    src="cct.png"
                    alt=""
        />
                        <Carousel.Caption>
                            <h3>Champions Chess Tour Results</h3>
                            <p>See the new champion here!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
            <Row>
                <br></br>
            </Row>
            <Row className='justify-content-md-center'>
                <Col xs={3}>
                    <Card style={{ width: '18rem' }} className='mb-2'>
                        <Card.Img variant='top' src='stats.png' />
                        <Card.Body>
                            <Card.Title>
                                Watch all the states with detais
                            </Card.Title>
                            <Card.Text>
                                In BetOrPlay.com, you can watch on live all the resuls of all your favourite sports.
                            </Card.Text>
                            <Button variant="primary">Watch stats</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card style={{ width: '18rem' }} className='mb-2'>
                    <Card.Img variant='top' src='money.png' />
                    <Card.Body>
                            <Card.Title>
                                Start with a Low-Price bet
                            </Card.Title>
                            <Card.Text>
                                Start with a little amount of money and enjoy the game!
                            </Card.Text>
                            <Button variant="primary">Start now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card style={{ width: '18rem' }} className='mb-2'>
                    <Card.Img variant='top' src='paycheck.png' />
                    <Card.Body>
                            <Card.Title>
                                Different pay- ways
                            </Card.Title>
                            <Card.Text>
                                Use your credit card, PayPal and other pay- ways.
                            </Card.Text>
                            <Button variant="primary">Watch how to reload</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
       </Container>
    );
}