import React, { Component } from 'react';
import {
  Row,
  Input,
  Icon
} from 'react-materialize';

class PhotoUpload extends Component {
  render() {
    return(
      <div className="custom-file-upload">
        <form onSubmit={ this.props.saveImage }>
          <input type="file" id="file" name="myfiles[]" multiple/>
          <button type="submit">Upload</button>
        </form>
      </div>
    )
  }
}

export default PhotoUpload;
