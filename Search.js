import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
      return (
        <div className="Search">
          <input className="Search-input" /><button className="Search-button">Search</button>
        </div>
      );
    }
  }
  
  export default Search;