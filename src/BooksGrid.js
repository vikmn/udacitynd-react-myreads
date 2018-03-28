import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'
import './App.css'

class BooksGrid extends Component{
  render() {
    return (<ol className="books-grid">
      {this.props.books.map(book =>
        <li key={book.title}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
              <ShelfChanger categories={this.props.categories} shelf={this.props.shelf.value} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors.join(",")}</div>
          </div>
        </li>)}
    </ol>);
    }
}

BooksGrid.propTypes = {
  books : PropTypes.arrayOf(PropTypes.object)
}

export default BooksGrid