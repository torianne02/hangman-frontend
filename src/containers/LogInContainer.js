import React, { Component } from 'react';
import LogInForm from '../components/accounts/LogInForm';

class LogInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initials: '',
      password: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();

    if (this.validate()) {
      this.createAccount()
      this.setState({
        initials: '',
        password: ''
      })
    }
  }

  validate = () => {
    if ( !this.state.initials ) {
      return alert('Please enter your initials!')
    } else if ( !this.state.password ) {
      return alert('Please enter a password!')
    } else {
      return true
    }
  }

  // function for form submission API call
  createAccount = async () => {
    fetch(`http://localhost:3001/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        initials: this.state.initials,
        password: this.state.password,
      })
    })
  }

  render() {
    return (
      <div className="login-form">
        <h1>LOG IN</h1>
        <LogInForm
          initialsValue={ this.state.initials }
          passwordValue={ this.state.password }
          handleOnChange={ this.handleOnChange }
          handleOnSubmit={ this.handleOnSubmit }
        />
      </div>
    )
  }
}

export default LogInContainer