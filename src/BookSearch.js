import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksGrid from "./BooksGrid";
import { search } from "./BooksAPI";
import { categories } from "./Utils";
import "./App.css";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  populateResults = results => this.setState({ books: results });

  doSearch = event => {
    const { value } = event.target;
    search(value).then(results => {
      if (!Array.isArray(results)) {
        results = [];
      }
      this.populateResults(results);
    });
  };

  dummySearch = book => this.populateResults(this.state.books.filter(b => b.id !== book.id));

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
            books={this.state.books}
            categories={categories}
            onRefresh={this.dummySearch}
          />
        </div>
      </div>
    );
  }
}

export default BookSearch;
