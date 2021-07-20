import React, {Component} from 'react';
import { Container, Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';


export class Signin extends React.Component {

    render() {

        return(
            <React.Fragment>
                <div className="container">
                    <h3 className="text-center mt-5 mb-5">Welcome Back</h3>
                    <div className="signIn-form">
                        <div className="google-signin">
                            <a><i class="fa fa-google" aria-hidden="true"></i> &nbsp;Sign In With Google</a>
                        </div>
                        <div className="or-login">
                            <span>OR</span>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            
                            </Form.Group>
                        
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" className="w-100">
                            Submit
                            </Button>
                        </Form>
                        
                    </div>
                    <div className="forgot text-center mt-3">
                        <p>
                        Forgot Password?
                        </p>
                    </div>
                </div>
            </React.Fragment>
            

        )

    }
}