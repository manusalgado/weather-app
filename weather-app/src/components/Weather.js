import React, { Component } from 'react'

class Weather extends Component {
  render() {
    return (
    <div>
      <miComponent>
        {this.props.city}
        {this.props.country}
        {this.props.humidity}
        {this.props.description}
        {this.props.temperature}
        {this.props.error}
      </miComponent>
    </div>
    );
  }
}

export default Weather;
