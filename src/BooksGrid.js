import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";
import "./App.css";

class BooksGrid extends Component {
  
  static defaultProps = { shelf: "none" };

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                {book.imageLinks && (
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}
                  />
                )}
                <ShelfChanger
                  shelf={this.props.shelf}
                  book={book}
                  onBookMoved={this.props.onBookMoved}
                />
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors && (
                <div className="book-authors">{book.authors.join(",")}</div>
              )}
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

BooksGrid.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object)
};

export default BooksGrid;
