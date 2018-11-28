import React, { Component } from 'react'
import { SideNavItem } from 'react-materialize'

class InCart extends Component {
  render(){
    const { book } = this.props
    return(
      <SideNavItem className="removeOverflow" href={null} price={book.price}>{book.title}</SideNavItem>
    )
  }
}

export default InCart
