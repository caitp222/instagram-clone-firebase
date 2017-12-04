import React, { Component } from 'react';
import {
  Button
} from 'react-materialize';

class PhotoUpload extends Component {
  render() {
    return(
      <div className="custom-file-upload">
        <form onSubmit={ this.props.saveImage } width="500">
          <input type="file" id="file"/>
          <input s={6} type="text" id="description" placeholder="Photo Description" onChange={ this.props.handleTextInput }/>
          <Button type="submit" waves='light'>Upload Image</Button>
        </form>
      </div>
    )
  }
}

export default PhotoUpload;
