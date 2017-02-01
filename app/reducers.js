import { combineReducers } from 'redux'
import { ADD_TODO,
        TOGGLE_TODO,
        DELETE_TODO,
        SET_VISIBILITY_FILTER,
        VisibilityFilters } from './actions'

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
        action.todo
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (todo.id === action.todo.id) {
          return action.todo
        }
        return todo
      })
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.index)
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

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
