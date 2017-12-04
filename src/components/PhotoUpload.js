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
        <form onSubmit={ this.props.saveImage } width="500">
            <input type="file" id="file"/>
          <button type="submit">Upload</button>
        </form>
      </div>
    )
  }
}

export default PhotoUpload;
