import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
const path = require('path')
import todoApp from './reducers'
import App from './components/App'
import { all_todos } from './persist/Todo.js'

all_todos((todos) => {
  let store = createStore(todoApp, { todos: todos})
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('content')
  )
})

