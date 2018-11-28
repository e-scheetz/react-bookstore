import React, { Component } from 'react'
import { SideNav, Button } from 'react-materialize'
import InCart from "../in-cart/in-cart"

class SideNavCart extends Component {
  render(){
    const { books } = this.props
    return(
      <SideNav
        trigger={<Button className='red' waves='light'>Cart</Button>}
        options={{ closeOnClick: true }}
        >
          {books.filter((book)=>(book.inCart === true)).map((book, idx)=>(
            <InCart book={book} key={idx}/>
          ))}
      </SideNav>
    )
  }
}

export default SideNavCart
