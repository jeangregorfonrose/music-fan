import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    // Bind methods
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  // Search for songs
  search() {
    this.props.onSearch(this.state.searchTerm);
  }

  // handle term change
  handleTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
