import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksGrid from "./BooksGrid";
import { search } from "./BooksAPI";
import "./App.css";

class BookSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      shelf: {
        name: "None",
        value: "none",
        books: []
      }
    };
  }

  populateResults = results => {
    const books = results.filter(result => this.props.myReads.filter(myread => myread.id !== result.id));
    const shelf = {
      name: "None",
      value: "none",
      books: books
    };
    console.log(shelf);
    this.setState({
      books: books,
      shelf: shelf
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
