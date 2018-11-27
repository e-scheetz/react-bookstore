import React, { Component } from 'react'
import SearchFilter from '../search-filter/search-filter'
// import { Navbar } from 'react-materialize'
import { Navbar, NavItem } from 'react-materialize'

class AppHeader extends Component {
  render(){
    return(
      <Navbar brand='react-bookstore' right>
        <NavItem href={null}><SearchFilter /></NavItem>
        {/* <NavItem onClick={() => console.log('test click')}>Cart</NavItem> */}
      </Navbar>
    )
  }
}

export default AppHeader
