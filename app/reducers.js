import { combineReducers } from 'redux'
import { REFRESH_TODOS,
         SET_VISIBILITY_FILTER,
         VisibilityFilters } from './actions'

const { SHOW_ALL } = VisibilityFilters

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todos(state = [], action) {
  switch (action.type) {
    case REFRESH_TODOS:
      return action.todos
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
