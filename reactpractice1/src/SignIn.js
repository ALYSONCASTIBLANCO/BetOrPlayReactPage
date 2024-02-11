import React from 'react';
import {useState} from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
export default function SignIn(){
    const [values, setValues]=React.useState({
        email:"",
        password:""
    });
    function handleSubmit(e){
        alert(values.email+" "+values.password);
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
            <Row className='justify-content-md-center'>
                <h1 className='fs1 text-center'>Sign in</h1>
            </Row>
            <Row className='justify-content-md-center'>
                <Col xs={5}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control id="email" type="email" name='email' value={values.email} onChange={handleChange} placeholder='Type yout email' required/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Your Password</Form.Label>
                            <Form.Control id="password" type="password" name='password' value={values.password} onChange={handleChange} placeholder='Type your password' required/>
                        </Form.Group>
                        <ButtonGroup>
                                <Button type='submit' value="Submit">Sign In</Button>
                                <Button href="/recover">I forgot my password</Button>
                                <Button href="/signup">Sign up now</Button>
                            </ButtonGroup>                        
                    </Form>
                </Col>

            </Row>
        </Container>
    );
}