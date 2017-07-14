import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './HelloWorld.jsx'

var element = document.createElement('div')
element.id = 'root'
document.body.appendChild(element)

ReactDOM.render(
  HelloWorld(),
  document.getElementById('root')
);
