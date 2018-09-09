import React, { Component } from 'react';
import './App.css';

// Components
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "4d9a86a353daf89c397e353effdc0d9f";


class App extends Component {

getWeather = async (e) => {
  e.preventDefault()
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=München,DE&appid=${API_KEY}&units=metric`)
  const data = await api_call.json()
  console.log(data);
  
}

  render() {
    return (
      <React.Fragment>
       <Title/>
       <Form getWeather={this.getWeather}/>
       <Weather/>
      </React.Fragment>
    );
  }
}

export default App;
