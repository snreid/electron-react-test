import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className='col-md-12'>
      <div className='row'>&nbsp;</div>
      <div className='row'>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <div className='form-group'>
            <input className='form-control' ref={node => {
              input = node
            }} />
          </div>
          <button className="btn btn-success" type="submit">
            Add Todo
          </button>
        </form>
        <div className='row'>&nbsp;</div>
      </div>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
