import React, { Component } from 'react'
import { Row, CollectionItem, Col } from 'react-materialize'

class BookCollectionItem extends Component {
  render(){
    const { book } = this.props
    return(
      <div>
        <Row>
          <CollectionItem>
            <Col s={3} m={3} l={3}>{book.title}</Col>
            <Col s={3} m={3} l={3}>{book.author}</Col>
            <Col s={2} m={2} l={2}>{book.publisher}</Col>
            <Col s={2} m={2} l={2}>{book.published}</Col>
            <Col s={1} m={1} l={1}>+ Cart</Col>
            <Col s={1} m={1} l={1}>- Cart</Col>
          </CollectionItem>
        </Row>
        <Row>
          <CollectionItem>
            <Col s={1} m={1} l={1}></Col>
            <Col s={2} m={2} l={2}>{book.subtitle}</Col>
            <Col s={8} m={8} l={8}>{book.description}</Col>
            <Col s={1} m={1} l={1}>${book.price}</Col>
          </CollectionItem>
        </Row>
      </div>
    )
  }
}

export default BookCollectionItem
