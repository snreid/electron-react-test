/*
 * action types
 */

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
import { create_todo, toggle_todo, destroy_todo } from './persist/Todo.js'

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: todo
  }
}

export function addingTodo(text) {
  return function(dispatch) {
    var doc = { text: text }
    return create_todo(doc).then(function(todo){
      dispatch(addTodo(todo))
    })
  }
}

export function toggleTodo(todo) {
  return { type: TOGGLE_TODO, todo: todo}
}

export function togglingTodo(todo){
  return function(dispatch) {
    return toggle_todo(todo).then(function(todo){
      dispatch(toggleTodo(todo))
    })
  }
}

export function deleteTodo(index) {
  delete_todo(index)
  return { type: DELETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
