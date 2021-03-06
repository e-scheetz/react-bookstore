import React, { Component } from 'react'
import { Collection } from 'react-materialize'
import BookCollectionItem from '../book-collection-item/book-collection-item'

class BooksList extends Component {
  render(){
    const { books, addRemoveCart } = this.props
    return(
      <div className='container'>
        <Collection header='Books'>
          {books.map((book, idx) => (
            <BookCollectionItem addRemoveCart={addRemoveCart} book={book} key={idx}></BookCollectionItem>
          ))}
        </Collection>
      </div>
    )
  }
}

export default BooksList
