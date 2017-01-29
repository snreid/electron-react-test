import React, { PropTypes } from 'react'

const Todo = ({ onClick, onDelete, completed, text }) => (
  <li className='list-group-item'
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <div className='pull-right' onClick={onDelete}>
      x
    </div>

  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
