import React, { Component } from "react";
import BooksGrid from "./BooksGrid";
import { getAll } from "./BooksAPI";
import { groupBy, categories } from "./Utils";

import "./App.css";

class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      shelves: []
    };
  }
  
  moveBook = book => this.getMyReads();
  
  getMyReads = () => {
    getAll().then(bookList => {
      const groupedBooks = groupBy(bookList, "shelf");
      const shelves = categories.map(category => {
        return {
          name: category.name,
          value: category.value,
          books: groupedBooks[category.value] || []
        };
      });
      this.setState({
        shelves: shelves,
        categories: shelves.map(shelf => shelf.value)
      });
    });
  };

  componentDidMount() {
    this.getMyReads();
  }

  render() {
    const { shelves } = this.state;
    return (
      <div className="list-books-content">
        <div>
          {shelves.map(shelf => (
            <div key={shelf.value} className="bookshelf">
              <h2 className="bookshelf-title">{shelf.name}</h2>
              <div className="bookshelf-books">
                <BooksGrid
                  books={shelf.books}
                  shelf={shelf.value}
                  onBookMoved={this.moveBook}
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
