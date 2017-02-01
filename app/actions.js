/*
 * action types
 */

export const REFRESH_TODOS = 'REFRESH_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = { SHOW_ALL: 'SHOW_ALL', SHOW_COMPLETED: 'SHOW_COMPLETED', SHOW_ACTIVE: 'SHOW_ACTIVE' }

/*
 * action creators
 */
import { all_todos, create_todo, toggle_todo, destroy_todo } from './persist/Todo.js'

export function refreshTodos(todos){
  return {
    type: REFRESH_TODOS,
    todos: todos
  }
}

export function refreshingTodos(){
  return function(dispatch){
    return all_todos().then(function(todos){
      dispatch(refreshTodos(todos))
    })
  }
}

export function addingTodo(text) {
  return function(dispatch) {
    var doc = { text: text }
    return create_todo(doc).then(function(todo){
      dispatch(refreshingTodos())
    })
  }
}

export function togglingTodo(todo){
  return function(dispatch) {
    return toggle_todo(todo).then(function(todo){
      dispatch(refreshingTodos())
    })
  }
}

export function deleteTodo(index) {
  return function(dispatch){
    return destroy_todo(index).then(function(numDeleted){
      dispatch(refreshingTodos())
    })
  }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
