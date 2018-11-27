import React, { Component } from 'react'
import { Collection } from 'react-materialize'
import BookCollectionItem from '../book-collection-item/book-collection-item'

class BooksList extends Component {
  render(){
    const { books } = this.props
    return(
      <div className='container'>
        <Collection header='Books'>
          {books.map((book) => (
            <BookCollectionItem book={book}></BookCollectionItem>
          ))}
        </Collection>
      </div>
    )
  }
}

export default BooksList
