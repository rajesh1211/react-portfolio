import React from 'react';
import { connect } from 'react-redux'
import { contactRequest } from '../actions/contactActions'

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
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input 
                type="text" 
                name="email" 
                className="form-control" 
                id="email"
                onChange={this.onChange}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          this {this.props.popup.message}
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

export default connect(mapStateToProps, {contactRequest})(Contact);