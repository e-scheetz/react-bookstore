import React, { Component } from 'react'
import { SideNav, Button } from 'react-materialize'

class SideNavCart extends Component {
  render(){
    return(
      <SideNav
        trigger={<Button className='red' waves='light'>Cart</Button>}
        options={{ closeOnClick: true }}
        >

      </SideNav>
    )
  }
}

export default SideNavCart
