import React, {Component, useState} from 'react';

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            loadingForm : false,
            name : ''
        }
        this.handleText=this.handleText.bind(this)
    }

    handleText(e) {
        this.setState ({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit=(e)=> {
        this.setState({
            loadingForm:true
        })
        this.setState({
            loadingForm:false,
            name:''
        })
        console.log(this.state)
    }

    render() {

        
        return(

            
        
              
            <React.Fragment>
            <div className="container mt-5">
                <div className="d-flex justify-content-center row">
                    <div className="connect-section">
                        <div class="content">
                            <h2 className="connect-section-title">Connect with anyone.</h2>
                            <p>Hunter lets you find professional email addresses in seconds and connect with the people that matter for your business.</p>
                            <div className="email-form">
                            <form onSubmit={this.handleSubmit} loading={this.state.loadingForm}>
                            <div className="input-group">
                                <input type="text" className="form-control emil-form-inner" placeholder="Enter your domain" name='name' value={this.state.name} onChange={this.handleText} />
                                <span className="input-group-btn">
                                <button className="btn" type="submit">Find Email Address</button>
                                </span>
                            </div>
                            </form>
                            
                            <p>Enter a domain name to launch the search. For example, qtonix.com.</p>
                            </div>
                        </div>

                    </div>
                    

                    <div className="domainSearch text-center">
                        <h6 className="mt-3">DOMAIN SEARCH</h6>
                        <h5 className="mt-3">Get the email addresses behind any website.</h5>
                        <p className="mt-3">The Domain Search lists all the people working in a company with their name and email address found on the web. With 100+ million email addresses indexed, effective search filters and scoring, it's Hunter's most powerful email-finding tool.</p>
                        <p className="mt-3 mb-5 text-receive">Receive 25 free searches/month</p>
                        
                    </div>
                    

                    <div className="emailFinder">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="emailFinderInner">
                                <h6>EMAIL FINDER</h6>
                                <h5>Find the email address of any professional.</h5>
                                <p>Find the email addresses of people you want to contact one by one or in bulk to enrich your database. The Email Finder uses a large number of signals to find the proven or most probable email address of anyone in a fraction of second.</p>
                                <p className="text-email">Test the Email Finder</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="emailFinderInner">
                                    <h6>EMAIL VERIFIER</h6>
                                    <h5>Verify the deliverability of any email address.</h5>
                                    <p>The Email Verifier does a complete check of the email address to let you send your emails with a complete confidence. As it uses our unique set of data, the Email Verifier can return a result even where other standard verification tools fail.</p>
                                    <p className="text-email">Test the Email Verifier</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="data-transparency text-center mt-5 mb-5">
                        <h3>We believe in data transparency.</h3>
                        <p>At Qtonix, we are convinced the most valuable data is sourced and processed using transparent methods. Every single email address we collect and distribute in the Domain Search has public sources we indicate, along with the discovery dates.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>


                </div>
            </div>
            
            </React.Fragment>
        );
    }

}

