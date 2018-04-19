import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";
import { getAll } from "./BooksAPI";

import "./App.css";

class BooksApp extends Component {
  
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  getMyReads = () => {
    getAll().then(books => {
      this.setState({ books: books });
    });
  };

  componentDidMount() {
    this.getMyReads();
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() =>
          (<BookSearch myReads={this.state.books}/>)} />
        <Route
          path="/"
          exact
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookShelf />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
