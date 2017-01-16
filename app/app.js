import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import nedb from 'nedb-persist'
const path = require('path')
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)
persistStore(store, { storage: nedb({filename: path.join(__dirname, '/db/db.json')}) })


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)
