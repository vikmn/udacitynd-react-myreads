import React from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";
import "./App.css";

const BooksGrid = ({ shelf, onBookMoved }) =>
{
    return (
      <ol className="books-grid">
        {shelf.books.map(book => (
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
                  currentShelf={shelf.value}
                  book={book}
                  onBookMoved={onBookMoved}
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

BooksGrid.propTypes = {
  shelf: PropTypes.object.isRequired,
  onBookMoved: PropTypes.func.isRequired
};

export default BooksGrid;
