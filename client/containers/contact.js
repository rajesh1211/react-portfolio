import React from 'react';
import { connect } from 'react-redux'
import { contactRequest } from '../actions/contactActions'

require('../styles/about.scss');


class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Subscribe" + this.state);
    this.props.contactRequest(this.state)
  }

  render() {
    console.log(this.props.popup.isShow)
    return(
      <div className="contact-container">
        <div className="row">
          <div className="col-md-6 col-md-offset-6 contact-inner">
            <div>
              <p className="heading">Lets get together</p>
              <p>Rajesh Raikwar</p>
              <p>G003, V. Raj Sunshine Apartment, Bellandur </p>
              <p>Banglore , 560103 </p>
              <p>Email: <a href="mailto:rajesh.raikwar1211@gmail.com">rajesh.raikwar1211@gmail.com</a></p>
            </div>  

            <div className="social-links-container">
              <a className="social-link" href="https://angel.co/rajesh-raikwar" target="_blank">
                <i className="icon fa fa-angellist"></i>
              </a>
              <a className="social-link" href="https://www.linkedin.com/in/rajeshraikwar" target="_blank">
                <i className="icon fa fa-linkedin"></i>
              </a>
              <a className="social-link" href="https://github.com/rajesh1211" target="_blank">
                <i className="icon fa fa-github-alt"></i>
              </a>
            </div>  

            <form onSubmit={this.onSubmit} className="form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your name"
                  className="form-control" 
                  id="name"
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="email" 
                  className="form-control" 
                  id="email"
                  placeholder="Your email address"
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <textarea 
                  className="form-control" 
                  rows="5" 
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  ></textarea>  
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-default pull-right">Submit</button>
              </div>  
            </form>
          </div>
        </div>
      </div>  
    );  
  }
}

function mapStateToProps(state) {
  return {
    popup: state.popup
  };
}

Contact.propTypes = {
  contactRequest: React.PropTypes.func.isRequired
}

// export default connect(mapStateToProps, {contactRequest})(Contact);
module.exports = connect(mapStateToProps, {contactRequest})(Contact);