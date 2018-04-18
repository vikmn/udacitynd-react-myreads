import React, { Component } from "react";
import BooksGrid from "./BooksGrid";
import { getAll } from "./BooksAPI";
import { groupBy, categories } from "./Utils";

import "./App.css";

class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookShelves: [],
      categories: []
    };
  }

  getMyReads = (book) => {
    getAll().then(bookList => {
      const groupedBooks = groupBy(bookList, "shelf");
      this.setState({
        bookShelves: groupedBooks,
        categories: Object.keys(groupedBooks)
      });
    });
  };

  componentDidMount() {
    this.getMyReads();
  }

  render() {
    const { bookShelves } = this.state;
    return (
      <div className="list-books-content">
        <div>
          {Object.keys(bookShelves).map(shelf => (
            <div key={shelf} className="bookshelf">
              <h2 className="bookshelf-title">{shelf}</h2>
              <div className="bookshelf-books">
                <BooksGrid
                  books={bookShelves[shelf]}
                  shelf={shelf}
                  categories={categories}
                  onRefresh={this.getMyReads}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BookShelf;
