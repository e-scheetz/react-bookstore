import React, { Component } from 'react'
import { Row, CollectionItem, Col, Button } from 'react-materialize'

class BookCollectionItem extends Component {
  render(){
    const { book, addRemoveCart } = this.props
    return(
      <CollectionItem className='light-blue'>
        <Row>
          <Col s={12} m={4} l={4}><a href={book.website}><h5>{book.title}</h5></a></Col>
          <Col m={1} l={1} className='hide-on-small-only'><h5 className='center-align'>--</h5></Col>
          <Col m={7} l={7} className='hide-on-small-only'><h5>{book.subtitle}</h5></Col>
        </Row>
        <Row>
          <Col s={1} m={1} l={1}></Col>
          <Col s={11} m={10} l={10}>{book.description}</Col>
          <Col m={1} l={1} className='hide-on-small-only'></Col>
        </Row>
        <Row className='valign-wrapper'>
          <Col m={3} l={3} className='hide-on-small-only'></Col>
          <Col s={1} m={1} l={1}>{book.inCart ? 'In Cart' : ''}</Col>
          <Col m={2} l={2} className='hide-on-small-only valign center-align'><h5>PRICE:</h5></Col>
          <Col s={4} m={2} l={2} className='valign center-align'><h5>${book.price}</h5></Col>
          <Col m={2} l={2} className='valign center-align hide-on-small-only'><h5>CART:</h5></Col>
          <Col s={4} m={2} l={2} className='valign center-align'><Button onClick={()=>addRemoveCart(book.id, true)} waves='light'><i className="material-icons">add</i></Button></Col>
          <Col s={4} m={2} l={2} className='valign center-align'><Button onClick={()=>addRemoveCart(book.id, true)} waves='light'><i className="material-icons">remove</i></Button></Col>
        </Row>
      </CollectionItem>
    )
  }
}

export default BookCollectionItem
