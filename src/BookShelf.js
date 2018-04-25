import React, { Component } from "react";
import BooksGrid from "./BooksGrid";
import { getAll } from "./BooksAPI";
import { groupBy, categories } from "./Utils";

import "./App.css";

class BookShelf extends Component {
  constructor(props) {
    super(props);
    const groupedBooks = groupBy(props.myReads, "shelf");
    const shelves = categories.map(category => {
      return {
        name: category.name,
        value: category.value,
        books: groupedBooks[category.value] || []
      };
    });

    this.state = {
      categories: shelves.map(shelf => shelf.value),
      shelves: shelves
    };
  }

  updateMyReads = book => {
    const shelfs = this.state.shelves.map(shelf => {
      shelf.books = shelf.books.filter(bk => book.id !== bk.id);
      if (shelf.value === book.shelf) {
        shelf.books = [...shelf.books, book];
      }
      return shelf;
    });
    console.log(shelfs);
    this.setState({ shelves:shelfs });

  };

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
                  shelf={shelf}
                  onBookMoved={this.updateMyReads}
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
