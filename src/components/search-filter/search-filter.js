import React, { Component } from 'react'

class SearchFilter extends Component {
  render(){
    return(
      <div>
        <input id="search" placeholder="Search" />
        <div className="search-results"></div>
      </div>
    )
  }
}

export default SearchFilter
