import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
    <form onSubmit={this.props.getWeather}>
        <input type="text" placeholder="City..." name="city"/>
        <input type="text" placeholder="Country..." name="country"/>
        <button>Get weather</button>
    </form>
    );
  }
}

export default Form;
