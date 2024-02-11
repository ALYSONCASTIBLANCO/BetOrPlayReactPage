import React from "react";
import { useState } from 'react';
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';

export default function SignUp() {
    const [values, setValues] = React.useState({
        email: "",
        completename: "",
        lastname: "",
        birthdate: "",
        username: "",
        password: ""
    })
    const [actualState, changeCheckState] = React.useState(false);
    const handleCheckbox = (e) => {
        changeCheckState(e.target.checked);
    }
    const handleChange=(e)=>{
        const{target}=e;
        const {name, value}=target;
        const newValues={
            ...values,
            [name]:value
        };
        setValues(newValues);
    }
    const handleSubmit = (e) => {
        alert(values.email + " " + values.completename + " " + values.lastname + " " + values.birthdate + " " + values.username + " " + values.password);
    }
    //console.log(actualState);
    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1 className="fs1 text-center">Sign up to enjoy our benefits</h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={5}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control id="email" type="email" name="email" value={values.email} onChange={handleChange} placeholder="example@mail.com"  required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control id="completename" type="text" name="completename" value={values.completename} onChange={handleChange} placeholder="Type your name"  required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Your last name</Form.Label>
                            <Form.Control id="lastname" type="text" name="lastname" value={values.lastname} onChange={handleChange} placeholder="Type your last name" required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Your birth date</Form.Label>
                            <Form.Control id="birthdate" type="date" name="birthdate" value={values.birthdate} onChange={handleChange} placeholder="YYYY/MM/DD" required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Choose an username</Form.Label>
                            <Form.Control id="username" type="text" name="username" value={values.username} onChange={handleChange} placeholder="Type a valid username" required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Your password</Form.Label>
                            <Form.Control id="password" type="password" name="password" value={values.password} onChange={handleChange} placeholder="Type a safe password" required/>
                        </Form.Group>
                        <br />
                        <Form.Check onChange={handleCheckbox} checked={actualState} type="checkbox" label="I accept the age limits in accordance with the Colombian law" id='chechbox' />
                        <br />
                        <ButtonGroup className="mb-3">
                            <Button type="submit" value="Submit" disabled={!actualState}>Sign up</Button>
                            <Button target="_blank" href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4168">More about limit age policy</Button>
                        </ButtonGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}