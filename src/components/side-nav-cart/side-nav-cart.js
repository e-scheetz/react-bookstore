import React, { Component } from 'react'
import { SideNav, Button } from 'react-materialize'

class SideNavCart extends Component {
  render(){
    return(
      <SideNav
        trigger={<Button floating large className='red' waves='light' icon='add' />}
        options={{ closeOnClick: true }}
        >

      </SideNav>
    )
  }
}

export default SideNavCart
