/*
 * action types
 */

export const REFRESHED_TODOS = 'REFRESHED_TODOS'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = { SHOW_ALL: 'SHOW_ALL', SHOW_COMPLETED: 'SHOW_COMPLETED', SHOW_ACTIVE: 'SHOW_ACTIVE' }

/*
 * action creators
 */
import { all_todos, create_todo, toggle_todo, destroy_todo } from './persist/Todo.js'

export function refreshedTodos(todos){
  return {
    type: REFRESHED_TODOS,
    todos: todos
  }
}

export function refreshTodos(){
  return function(dispatch){
    return all_todos().then(function(todos){
      dispatch(refreshedTodos(todos))
    })
  }
}

export function addTodo(text) {
  return function(dispatch) {
    var doc = { text: text }
    return create_todo(doc).then(function(todo){
      dispatch(refreshTodos())
    })
  }
}

export function toggleTodo(todo){
  return function(dispatch) {
    return toggle_todo(todo).then(function(todo){
      dispatch(refreshTodos())
    })
  }
}

export function deleteTodo(index) {
  return function(dispatch){
    return destroy_todo(index).then(function(numDeleted){
      dispatch(refreshTodos())
    })
  }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
