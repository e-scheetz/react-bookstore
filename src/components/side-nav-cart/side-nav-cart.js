import React, { Component } from 'react'
import { SideNav, Button, SideNavItem } from 'react-materialize'
import InCart from "../in-cart/in-cart"

class SideNavCart extends Component {
  render(){
    const { books } = this.props
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return(
      <SideNav
        trigger={<Button className='red' waves='light'>Cart</Button>}
        options={{ closeOnClick: true }}
        >
          {books.filter((book)=>(book.inCart === true)).map((book, idx)=>(
            <InCart book={book} key={idx}/>
          ))}
          <SideNavItem href={null}>${books.filter((book)=>(book.inCart===true)).map((book)=>(book=book.price)).reduce(reducer, 0)}.00</SideNavItem>
      </SideNav>
    )
  }
}

export default SideNavCart
