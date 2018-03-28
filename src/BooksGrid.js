import React,{ Component } from 'react'
import ShelfChanger from './ShelfChanger'
import './App.css'

class BooksGrid extends Component{
  // constructor(props){
  //   super(props);

  // }
  render() {
    return (<ol className="books-grid">
      {this.props.books.map(book =>
        <li key={book.name}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.backgroundImage})` }} />
              <ShelfChanger categories={this.props.categories} shelf={this.props.shelf.value} />
            </div>
            <div className="book-title">{book.name}</div>
            <div className="book-authors">{book.author}</div>
          </div>
        </li>)}
    </ol>);
    }
}

export default BooksGrid