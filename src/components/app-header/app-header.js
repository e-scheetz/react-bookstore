import React, { Component } from 'react'
// import { Navbar } from 'react-materialize'
import { Navbar, NavItem, Icon } from 'react-materialize'

class AppHeader extends Component {
  render(){
    return(
      <Navbar brand='react-bookstore' right>
        <NavItem><Icon>search</Icon></NavItem>
        <NavItem onClick={() => console.log('test click')}>Cart</NavItem>
      </Navbar>
    )
  }
}

export default AppHeader
