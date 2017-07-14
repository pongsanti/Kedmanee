import React from 'react'
import ReactDOM from 'react-dom'

var element = document.createElement('div')
element.id = 'root'
document.body.appendChild(element)

ReactDOM.render(
  <h1>HelloWorld!</h1>,
  document.getElementById('root')
);
