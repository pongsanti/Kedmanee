import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './HelloWorld'
// css
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'

var element = document.createElement('div')
element.id = 'root'
document.body.appendChild(element)

ReactDOM.render(
  HelloWorld(),
  document.getElementById('root')
);
