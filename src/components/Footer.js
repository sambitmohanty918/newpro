import React, {Component} from 'react';
import { Container, Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

export class Footer extends React.Component {

    render() {

        return(
            
            <React.Fragment>
                <div className="footer mt-5">
                    <Container>
                        
                        <div className="social-icons text-center">
                            <a><i className="fa fa-twitter"></i></a>
                            <a><i className="fa fa-facebook-square"></i></a>
                            <a><i className="fa fa fa-linkedin-square"></i></a>
                            <a><i className="fa fa-youtube-play"></i></a>
                        </div>
                        <div className="copyright text-center">
                            <p>© 2013-2021 All Rights Reserved. Qtonix is a registered trademark of Seo Web Services, Inc.</p>
                            <p><span>Terms</span> . <span> Privacy</span> . <span>Security</span> . <span>Do Not Sell My Info</span> . <span>Blog</span></p>
                        </div>
                    </Container>
                </div>
            </React.Fragment>

        )
    }
}