import Container from "react-bootstrap/esm/Container";
import "./stylessports.css"
import { Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
export default function SportsMain(){
    return(
        <Container>
            <h1 className="sportstitle">Choose your sport</h1>
        <Row className="justify-content-md-center">
            <Col md={3}>
                <Card>
                    <Card.Body>
                        <Card.Img className='images' variant="top" src="sportsimage/soccer.png"/>
                        <Card.Title className="cardtitle">Soccer</Card.Title>
                        <div className="row justify-content-center">
                            <Button href="/sporttemplate" variant="warning">Watch the stats</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <Card.Body>
                    <Card.Img className='images' variant="top" src="sportsimage/americanfootball.webp"/>
                        <Card.Title className="cardtitle">Football</Card.Title>
                        <div className="row justify-content-center">
                            <Button href="/sporttemplate" variant="warning">Watch the stats</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <Card.Body>
                    <Card.Img className='images' variant="top" src="sportsimage/baseball.webp"/>
                        <Card.Title className="cardtitle">Baseball</Card.Title>
                        <div className="row justify-content-center">
                            <Button href="/sporttemplate" variant="warning">Watch the stats</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <Card.Body>
                    <Card.Img className='images' variant="top" src="sportsimage/formula_1_PNG49.png"/>
                        <Card.Title className="cardtitle">Cars Race</Card.Title>
                        <div className="row justify-content-center">
                            <Button href="/sporttemplate" variant="warning">Watch the stats</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <br/>
        <Row className="justify-content-md-center">
        <Col md={3}>
                <Card>
                    <Card.Body>
                    <Card.Img className='images' variant="top" src="sportsimage/cycling.png"/>
                        <Card.Title className="cardtitle">Cycling</Card.Title>
                        <div className="row justify-content-center">
                            <Button href="/sporttemplate" variant="warning">Watch the stats</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <Card.Body>
                    <Card.Img className='images' variant="top" src="sportsimage/motogp-clipart.png"/>
                        <Card.Title className="cardtitle">Motorcycling</Card.Title>
                        <div className="row justify-content-center">
                        <Button href="/sporttemplate" variant="warning">Watch the stats</Button>
                        </div>
                        
                    </Card.Body>
                </Card>
            </Col>
                <Col md={3}>
                <Card>
                    <Card.Body>
                    <Card.Img className='images' variant="top" src="sportsimage/chess.png"/>
                        <Card.Title className="cardtitle">Chess</Card.Title>
                        <div className="row justify-content-center">
                            <Button href="/sporttemplate" variant="warning">Watch the stats</Button>
                        </div>                        
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <Card.Body>
                    <Card.Img className='images' variant="top" src="sportsimage/sports.webp"/>
                        <Card.Title className="cardtitle">Other Sports</Card.Title>
                        <div className="row justify-content-center">
                            <Button href="/sporttemplate" variant="warning">Watch the stats</Button>
                        </div>

                    </Card.Body>
                </Card>
            </Col>

        </Row>
        </Container>
    );
}