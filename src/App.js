import React, { Component } from 'react';
import { fire, database } from './firebase'
import PhotoUpload from './components/PhotoUpload'
import SignUpForm from './components/SignUpForm'
import {
  Card,
  CardTitle,
  Button
} from 'react-materialize'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      photos: [],
      newPhotoDescription: ""
    }
    this.saveImage = this.saveImage.bind(this)
  }

  componentDidMount = () => {
    const messagesRef = database.ref('images')
    messagesRef.on('value', (data) => {
      const photos = Object.values(data.val()).reverse()
      this.setState({ photos: photos })
    })
  }

  logOut = () => {
    fire.auth().signOut()
  }

  handleTextInput = (event) => {
    this.setState({ newPhotoDescription: event.target.value })
  }

  saveImage = (event) => {
    event.preventDefault();
    const description = this.state.newPhotoDescription
    const reader = new FileReader();
    const file = event.target.querySelector('input').files[0]
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.storage = fire.storage
      database.ref('images').push({image: reader.result, description: description}).then( response => {
        document.querySelector('form').reset()
      })
    }
  }

  render() {
    const user = fire.auth().currentUser;
    if(user) {
      return (
        <div className="App">
          <h1>Instagram Clone</h1>
          <Button type="submit" waves='light' onClick={ this.logOut }>Log Out</Button>
          <div className="container">
          <PhotoUpload saveImage={ this.saveImage } handleTextInput={ this.handleTextInput } />
          {
          this.state.photos.map( image => {
            return <Card header={<CardTitle reveal image={ image.image } waves='light'/>}
              title={ image.description }>
            </Card>
          })
          }
          </div>
        </div>
      );
      } else {
          return(
            <div className="App">
              <SignUpForm />
            </div>
          )
      }
  }
}

export default App;
