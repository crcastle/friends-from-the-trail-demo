import React from 'react'
import ReactDOM from 'react-dom'
import ReconnectingWebSocket from 'reconnecting-websocket'
import App from './App'

import './css/reset.css'
import './css/main.css'

const wsUrl = `ws${window.location.href.match(/^http(s?:\/\/.*)\/.*$/)[1]}`
const ws = new ReconnectingWebSocket(wsUrl, null, {
  reconnectInterval: 1000,
  reconnectDecay: 1
})

const render = () => {
  ReactDOM.render(<App ws={ws} />, document.getElementById('root'))
}

render()
if (module.hot) module.hot.accept(App, render)
