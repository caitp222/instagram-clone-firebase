import React, { Component } from 'react';
import { fire, database } from './firebase'
import PhotoUpload from './components/PhotoUpload'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
    this.saveImage = this.saveImage.bind(this)
  }

  componentDidMount = () => {
    const messagesRef = database.ref('images')
    messagesRef.on('value', (data) => {
      const photos = Object.values(data.val())
      this.setState({ photos: photos })
    })
  }

  saveImage = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.querySelector('input').files[0]
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.storage = fire.storage
      database.ref('images').push(reader.result).then( response => {
      console.log(response)
    })
    }
  }

  render() {
    return (
      <div className="App">
        <PhotoUpload saveImage={ this.saveImage } />
        { this.state.photos.map( image => {
          return <img src={image} alt="Image" height="100" /> })}
      </div>
    );
  }
}

export default App;
