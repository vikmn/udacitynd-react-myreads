import React, { Component } from "react";
import BooksGrid from "./BooksGrid";
import { getAll } from "./BooksAPI";
import "./App.css";
const categories = [
  { name: "Currently Reading", value: "currentlyReading" },
  { name: "Read", value: "read" },
  { name: "Want to Read", value: "wantToRead" }
];

const groupBy = (array, groupByProperty) => {
  return array.reduce(function(groups, item) {
    const val = item[groupByProperty];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
};

class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookShelves: [],
      categories: []
    };
  }

  componentDidMount() {
    getAll().then(bookList => {
      const p = groupBy(bookList, "shelf");
      this.setState({ bookShelves: p });
      this.setState({ categories: Object.keys(p) });
    });
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
