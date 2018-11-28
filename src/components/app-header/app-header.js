import React, { Component } from 'react'
import { Navbar } from 'react-materialize'

class AppHeader extends Component {
  render(){
    return(
      <Navbar brand='react-bookstore' right>
      </Navbar>
    )
  }
}

export default AppHeader
