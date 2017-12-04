import React, { Component } from 'react';

class PhotoUpload extends Component {
  render() {
    return(
      <div>
        <form onSubmit={ this.props.saveImage }>
          <input type="file"/>
          <button type="submit">Upload</button>
        </form>
      </div>
    )
  }
}

export default PhotoUpload;
