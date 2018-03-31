import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksGrid from "./BooksGrid";
import { search } from "./BooksAPI";
import "./App.css";

const categories = [
  {
    name: "Currently Reading",
    value: "currentlyReading"
  },
  {
    name: "Want to Read",
    value: "wantToRead"
  },
  {
    name: "Read",
    value: "read"
  }
];

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  doSearch = event => {
    const { value } = event.target;
    search(value).then(bookList => {
      if (!Array.isArray(bookList)) {
        bookList = [];
      }
      this.setState({ books: bookList });
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
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
            shelf={"none"}
          />
        </div>
      </div>
    );
  }
}

export default BookSearch;
