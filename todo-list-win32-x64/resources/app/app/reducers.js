import { REHYDRATE } from 'redux-persist/constants'
import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'

const { SHOW_ALL } = VisibilityFilters

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todos(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      var incoming = action.payload.todos
      if (incoming) {
        return [
          ...state,
          ...incoming
        ]
      }
      return state
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
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

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
