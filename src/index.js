import ReactDOM from 'react-dom'
import HelloWorld from './HelloWorld'
// css
import './css/bootstrap/bootstrap.less'
// import 'bootstrap/dist/css/bootstrap-theme.css'
import './css/style.scss'

var element = document.createElement('div')
element.id = 'root'
document.body.appendChild(element)

ReactDOM.render(
  HelloWorld(),
  document.getElementById('root')
)
