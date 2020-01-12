import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
// import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
