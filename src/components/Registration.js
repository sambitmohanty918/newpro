import React, {useState} from 'react';
import { Container, Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Registration () {

    

        const [userRegistration, setUserRegistration] = useState({
            fname:"",
            email:"",
            pwd:""
        });

        const [records, setRecords] = useState([]);

        const handleInput = (e) => {
            const name = e.target.name;
            const value = e.target.value;

            console.log(name, value);

            setUserRegistration({ ...userRegistration, [name]:value });
        }

        const handleSubmit = (e) => {
            e.preventDefault();

            const newRecord = { ...userRegistration, id:new Date().getTime().toString() }
            console.log(records);
            setRecords([...records, newRecord]);
            console.log(records);

            setUserRegistration({ fname:"", email:"", pwd:"" })
        }

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
                        <Form action="" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" name="fname" id="fname" value={userRegistration.fname} onChange={handleInput} placeholder="Enter Name" />
                            
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" id="email" value={userRegistration.email} onChange={handleInput} placeholder="Enter email" />
                            
                            </Form.Group>
                        
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="pwd" id="pwd" value={userRegistration.pwd} onChange={handleInput} placeholder="Password" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" className="w-100">
                            Submit
                            </Button>
                        </Form>
                        
                    </div>
                    <div>
                        {
                            records.map((curUser) => {
                                const { id, fname, email, pwd } = curUser;
                                return (
                                    <div className="showUserDetails" key={curUser.id}>
                                        <p>{fname}</p>
                                        <p>{email}</p>
                                        <p>{pwd}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
            

        )

    
}

export default Registration;