import React, { Component } from 'react';
import { fire, database } from './firebase'
import PhotoUpload from './components/PhotoUpload'
import {
  Card,
  CardTitle,
  Navbar,
  NavItem
} from 'react-materialize'
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
        <h1>Instagram Clone</h1>
        <PhotoUpload saveImage={ this.saveImage } />
        {/* <Navbar brand="Caitlin's Instagram Clone" center> */}
        {/* </Navbar> */}
        <div className="container">
        {
          this.state.photos.map( image => {
            return <Card header={<CardTitle reveal image={image} waves='light'/>}
		          title="Card Title"
		          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
              </Card>
          })
        }
      </div>
    </div>
    );
  }
}

export default App;
