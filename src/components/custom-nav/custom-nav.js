import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'react-materialize'
import SideNavCart from '../side-nav-cart/side-nav-cart'
import FilterBy from '../filter-by/filter-by'

class CustomNav extends Component {
  constructor(props){
    super(props)
    this.state = {
      ...this.state,
      filteredArr: []
    }
  }

  selOnChange=(prop)=>{
    const { books } = this.props
    if(prop !== "None"){
      const newArr = books.map((book)=>(book[prop.toLowerCase()]))
      const filteredArr = newArr.filter((v,i) => newArr.indexOf(v) === i)
      this.setState({
        ...this.state,
        filteredArr: filteredArr
      })
      document.getElementById('filterSel2').value = ""
    }else{
      this.setState({
        ...this.state,
        filteredArr: []
      })
    }
    this.props.filterReset()
  }

  render(){
    const { books, filtering } = this.props
    const bookKeysArr = ["None", "Author", "Publisher"]
    return(
      <div className='container'>
        <Row>
          <Col s={3} m={3} l={3}>
            <Input id="filterSel" type='select' label='Filter by:' defaultValue='' onChange={() => this.selOnChange(document.getElementById('filterSel').value)
            }>
              <option disabled value="">Filter By</option>
              {bookKeysArr.map((key, idx)=>(
                key !== "" ? <option value={key} key={idx}>{key}</option> : <option value="" key={idx}>{key}</option>
              ))}
            </Input>
          </Col>
          {this.state.filteredArr.length > 0 ? <FilterBy filtering={filtering} options={this.state.filteredArr}/> : null}
          {this.state.filteredArr.length > 0 ? null : <div><Col s={3} m={3} l={3}>
            <Input id="search" placeholder="Search"/>
          </Col>
        <Col s={3} m={3} l={3}>
          <Button onClick={() => filtering(document.getElementById('search'))}>Search</Button>
        </Col></div>}
          <Col s={3} m={3} l={3}>
            <SideNavCart books={books}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CustomNav
