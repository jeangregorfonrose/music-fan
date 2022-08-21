import React from "react";
import "./Track.css";

class Track extends React.Component {
  constructor(props){
    super(props);

    // Bind methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  // Render the + or - based on the searchResults playlist or the new Playlist created
  renderAction(isRemoval) {
    // Add a new track or delete track from playlist or search results
    return <button className="Track-action" onClick={isRemoval ? this.removeTrack : this.addTrack}>{isRemoval ? "-" : "+"}</button>;
  }

  // Add the track from the search results to the new playlist created
  addTrack(){
    this.props.onAdd(this.props.track);
  }

  // Remove the track from the user's new playlist
  removeTrack(){
    this.props.onRemove(this.props.track);
  }

  // Render method
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction(this.props.isRemoval)}
      </div>
    );
  }
}

export default Track;
