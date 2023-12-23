import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

export default function AboutUs(){
    return(
 
        <Container fluid>
            <Row>
                <Col>
                <h1 class="text-xl-center">About Us page</h1>
                </Col>
            </Row>
            <Row>
                <h3 class="text-m-center">Bet Or Play is a web platform in which you'll find all the sports that you want and earn money with that</h3>
            </Row>
            <Row>
                <h4 class='text-xl-center'>Founded in 2023, Bet Or Play offers different ways to bet and watch results dynamically.</h4>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={3}>
                    <Card style={{width:"18rem"}} className="mb-2">
                        <Card.Body>
                            <Card.Img variant='top'  src="Flag-map_of_Colombia.svg.png"/>
                            <Card.Title class="fw-bold text-center">Colombian Talent</Card.Title>
                            <Card.Text class='text-center'>We're located in Bogota, Colombia, offering constant support.</Card.Text>                           
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card style={{width:"18rem"}} className="text-center">
                        <Card.Body>
                            <Card.Img variant='top'  src="sports.png"/>
                            <Card.Title class="fw-bold text-center">Main sports</Card.Title>
                            <Card.Text class='text-center'>We offer live- results in sports like football, basketball, baseball, Chess, Car races and much more!</Card.Text>
                            <Button href="/sports">Watch live fixtures</Button>                           
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card style={{width:"18rem"}} className="text-center">
                        <Card.Body>
                            <Card.Img variant='top'  src="bet.png"/>
                            <Card.Title class="fw-bold text-center">Bet according with your possiblities</Card.Title>
                            <Card.Text class='text-center'>You can start to bet from $1 in our live-states</Card.Text>
                            <Button href="/signin">Start now with us</Button>                           
                        </Card.Body>
                    </Card>
                </Col> 
                <Col xs={3}>
                    <Card style={{width:"18rem"}} className="text-center">
                        <Card.Body>
                            <Card.Img variant='top'  src="plus18.png"/>
                            <Card.Title class="fw-bold text-center">Age restriction</Card.Title>
                            <Card.Text class='text-center'>Remember that you have to be older than 18 to participate</Card.Text>
                            <Button href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4168">More about Legal Policy</Button>                           
                        </Card.Body>
                    </Card>
                </Col>               
            </Row>
        </Container>
    );
}