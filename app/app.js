import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const path = require('path')
import todoApp from './reducers'
import { refreshingTodos } from './actions'
import App from './components/App'

let store = createStore(todoApp, applyMiddleware(thunk))
store.dispatch(refreshingTodos())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)

