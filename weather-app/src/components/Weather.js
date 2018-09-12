import React, { Component } from 'react'

const Weather = props => (
  <div>
    { props.city && props.country && <p> Location: {props.city}, {props.country}</p> }
    { props.humidity && <p>Humidity: {props.humidity}</p>   }    
    { props.description && <p>Description: {props.description}</p>  }     
    { props.temperature && <p>Temperature: {props.temperature}</p> }      
    { props.error && <p>{props.error}</p> }      
  </div>
)

export default Weather;
