import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    <button className="btn btn-default">
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
    </button>
    {" "}
    <button className="btn btn-default">
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
    </button>
    {" "}
    <button className="btn btn-default">
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </button>
  </p>
)

export default Footer
