import React, { Component } from 'react';
// import logo from '../../logo.svg';
import AppHeader from '../app-header/app-header'
import BooksList from '../books-list/books-list'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json})
  }

  render() {
    return (
      <div className="App">
        <div className='container-wrapper'>
          <AppHeader/>
        </div>
        <BooksList books={this.state.books}></BooksList>
      </div>
    );
  }
}

export default App;
