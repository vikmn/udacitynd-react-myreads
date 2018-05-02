import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksGrid from "./BooksGrid";
import { search } from "./BooksAPI";
import "./App.css";

class BookSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shelf: {
        name: "None",
        value: "none",
        books: []
      }
    };
  }

  populateResults = results => {
    this.props.onMyReadsRequested()
      .then(myReads => {
        const excludeBooks = myReads.reduce(
          (exclude, book) => {
            exclude[book.id] = exclude[book.id] || true;
            return exclude;
          }, {});

        const books = results.filter(result => !excludeBooks[result.id]);
        const shelf = {
          name: "None",
          value: "none",
          books: books
        };
        this.setState({
          shelf: shelf
        });
      });
  }

  doSearch = event => {
    const { value } = event.target;
    search(value).then(results => {
      if (!Array.isArray(results)) {
        results = [];
      }
      this.populateResults(results);
    });
  };

  moveBookToShelf = book => this.populateResults(this.state.shelf.books.filter(b => b.id !== book.id));

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.doSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid
            shelf={this.state.shelf}
            onBookMoved={this.moveBookToShelf}
          />
        </div>
      </div>
    );
  }
}

export default BookSearch;
