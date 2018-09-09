import React, { Component } from 'react';
import './App.css';

// Components
import Title from './components/Title';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <React.Fragment className="App">
       <Title/>
      </React.Fragment>
    );
  }
}

export default App;
