import React, { Component } from 'react'
import { Row, Col, Input } from 'react-materialize'
import SideNavCart from '../side-nav-cart/side-nav-cart'
// import FilterOption from '../filter-option/filter-option'

class CustomNav extends Component {
  render(){
    const { books } = this.props
    const bookKeysArr = ["All", "Author", "Publisher"]
    return(
      <div className='container'>
        <Row>
          <Col s={4} m={4} l={4}>
            <Input id="filterSel" type='select' label='Filter by:' defaultValue=''>
              {bookKeysArr.map((key, idx)=>(
                <option
                  value={key}
                  key={idx}
                  onChange={null}
                  >
                    {key}
                  </option>
              ))}
            </Input>
          </Col>
          <Col s={4} m={4} l={4}>
            <Input id="search" placeholder="Search" />
          </Col>
          <Col s={4} m={4} l={4}>
            <SideNavCart/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CustomNav
