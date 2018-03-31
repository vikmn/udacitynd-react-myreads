import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";
import "./App.css";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" component={BookSearch} />
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
