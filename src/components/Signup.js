import React, {Component} from 'react';
import { Container, Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

export class Signup extends React.Component {

    render() {

        return(
            <React.Fragment>
                <div className="container">
                    <h3 className="text-center mt-5 mb-3">Create a free account</h3>
                    <h5 className="text-center mb-5">Qtonix can be used for free, forever.</h5>
                    <div className="signUp-form">
                        <div className="google-signin">
                            <a><i class="fa fa-google" aria-hidden="true"></i> &nbsp;Sign Up With Google</a>
                        </div>
                        <div className="or-login">
                            <span>OR</span>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Work email address</Form.Label>
                            <Form.Control type="email" placeholder="your@company.com" />
                            
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" className="w-100">
                            Continue
                            </Button>
                        </Form>
                        <p className="mt-3">By signing up, you agree to our Terms of Service and our Privacy Policy.</p>
                    </div>
                </div>
            </React.Fragment>
            

        )

    }
}