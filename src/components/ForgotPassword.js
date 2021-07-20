import React, {Component} from 'react';
import { Container, Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

export class Signin extends React.Component {

    render() {

        return(
            <React.Fragment>
                <div className="container">
                    <h3 className="text-center mt-5 mb-5">Forgotten Password</h3>
                    <div className="signIn-form">
                        
                        
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" className="w-100">
                            Send Me Reset Instruction
                            </Button>
                        </Form>
                        
                    </div>
                </div>
            </React.Fragment>
            

        )

    }
}