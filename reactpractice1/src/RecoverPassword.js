import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import React from "react";
import { useState } from "react"; 
export default function RecoverPassword(){
    const [values, setValues]=React.useState(
        {
            email: ""
        }
    );
    function handleSubmit(e){
        alert(values.email)
    }
    function handleChange(e){
        const {target}=e;
        const {name, value}=target;
        const newValues={
            ...values,
            [name]:value
        };
        setValues(newValues);
    }

    return(
        <Container>
        <Row>
        <h1 className="fs-2 text-center">Recover your password</h1>
        </Row>
        <Row className="justify-content-md-center">
            <Col md={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label style={{padding: "20px"}}>Type you email to recover your account</Form.Label>
                        <Form.Control id="email" type="email" name="email" onChange={handleChange} placeholder="example@mail.com" required></Form.Control>
                    </Form.Group>
                    <div className="row justify-content-center">
                        <Button type="submit" value="Submit" variant="warning">Recover now</Button>
                    </div>
                </Form>
            </Col>
        </Row>
            
    </Container>
    );
}