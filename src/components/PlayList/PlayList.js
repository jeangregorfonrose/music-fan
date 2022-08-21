import React from "react";
import TrackList from "../TrackList/TrackList";
import "./PlayList.css";

class PlayList extends React.Component {
  constructor(props){
    super(props);

    // Bind methods
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  // Change the name of the playlist
  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
        <TrackList playlistTracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default PlayList;
