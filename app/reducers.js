import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'

import { all_todos, create_todo } from './persist/Todo.js'

const { SHOW_ALL } = VisibilityFilters

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        add_todo(action)
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
	}
}

function add_todo(action) {
  var doc = {
    text: action.text,
  }
  return create_todo(doc)
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
