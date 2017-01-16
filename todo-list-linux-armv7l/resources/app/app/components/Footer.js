import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    <FilterLink filter="SHOW_ALL">
      <button className="btn btn-primary">
        All
      </button>
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_ACTIVE">
      <button className="btn btn-primary">
        Active
      </button>
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_COMPLETED">
      <button className="btn btn-primary">
        Completed
      </button>
    </FilterLink>
  </p>
)

export default Footer
