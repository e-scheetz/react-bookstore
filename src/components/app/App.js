import React, { Component } from 'react';
import CustomNav from '../custom-nav/custom-nav'
import AppHeader from '../app-header/app-header'
import BooksList from '../books-list/books-list'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: [],
      filteredBooks: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json, filteredBooks: json})
  }

  filtering(prop){
    if(prop.value !== ""){
      console.log(prop.value)
      const filteredBooks = this.state.books.filter((book)=>(book.title.includes(prop.value) || book.subtitle.includes(prop.value) || book.description.includes(prop.value) || book.author === prop.value || book.publisher === prop.value))
      if(filteredBooks.length > 0){
        this.setState({
          ...this.state,
          filteredBooks: filteredBooks
        })
      }else{
        this.setState({
          ...this.state,
          filteredBooks: this.state.books
        })
        window.Materialize.toast('No Results', 1000)
      }
    }else{
      this.setState({
        ...this.state,
        filteredBooks: this.state.books
      })
      window.Materialize.toast('No Results', 1000)
    }
  }

  filterReset(prop){
    this.setState({
      ...this.state,
      filteredBooks: this.state.books
    })
  }

  addRemoveCart(id, prop){
    const changedBook = this.state.books.filter((book)=>(book.id === id))[0]
    const unchangedBooks = this.state.books.filter((book)=>(book.id !== id))
    changedBook.inCart = prop
    this.setState({
      ...this.state,
      books: [...unchangedBooks, changedBook],
      filteredBooks: [...unchangedBooks, changedBook]
    })
  }

  render() {
    return (
      <div className="App">
        <div className='container-wrapper'>
          <AppHeader/>
        </div>
        <CustomNav filterReset={this.filterReset.bind(this)} filtering={this.filtering.bind(this)} books={this.state.books}/>
        <BooksList addRemoveCart={this.addRemoveCart.bind(this)} books={this.state.filteredBooks}></BooksList>
      </div>
    );
  }
}

export default App;
