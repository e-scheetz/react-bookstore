import React, { Component } from 'react'

class SearchFilter extends Component {
  render(){
    return(
      <div>
        <input id="search" placeholder="Search" />
        <select>
          <option selected disabled>Filter by:</option>
        </select>
      </div>
    )
  }
}

export default SearchFilter
