import React from "react";
import Track from '../Track/Track';
import "./TrackList.css";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {
          this.props.playlistTracks.map((track) => {
            return <Track key={track.id} track={track} onRemove={this.props.onRemove} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval}/>
          })
        }
      </div>
    );
  }
}

export default TrackList;
