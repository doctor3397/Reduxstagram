import React from "react";
import Photo from "./Photo";

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) =>
          <Photo {...this.props} post={post} key={i} i={i}/>
        )}
      </div>
    )
  }
}

export default PhotoGrid;
