import React from 'react'
import ReactDOM from 'react-dom'
const $ = require('jQuery')

class Search extends React.Component {
  handleSubmit(){
  }

  render() {
    return (
      <form id='new_dvd'>
        <h1>My First Form!</h1>
        <label>Name</label>
        <input id="name" type="name" />
        <br />
        <label>Genre</label>
        <input id="genre" type="genre" />
        <input type="submit" onClick={this.handleSubmit.bind(this)}/>
      </form>
    )
  }
}

ReactDOM.render( <Search/>, document.getElementById('content') )
