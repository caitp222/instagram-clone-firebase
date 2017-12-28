import React, { Component } from 'react';
import {
  Row,
  Input,
  Button
} from 'react-materialize';
import { fire } from '../firebase'

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    fire.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error)
    }).then(function(response) {
      console.log(response)
    })
  }

  handleTextInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return(
      <div className="flex-container">
        <Row>
          <form className="flex-item" onSubmit={ this.handleSubmit }>
        		<Input type="email" label="Email" name="email" s={6} onChange={this.handleTextInput}/>
            <Input type="password" label="password" name="password" s={6} onChange={this.handleTextInput}/>
            <Button type="submit" waves='light'>Login</Button>
          </form>
        </Row>
      </div>
    )
  }
}

export default LoginForm;
