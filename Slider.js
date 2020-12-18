import React, { Component } from 'react';
import './Slider.css';
import Videos from './Videos';

class Slider extends Component {
    render() {
      return (
        <div className="Slider">
          <Videos />
        </div>
      );
    }
  }
  
  export default Slider;