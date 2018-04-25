import React, { Component } from "react";
import { update } from "./BooksAPI";
import { categories } from "./Utils";
import "./App.css";

class ShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = { shelf: props.shelf };
  }

  moveBook = event => {
    const shelf = event.target.value;
    this.moveBookToShelf(this.props.book, shelf);
  }

  moveBookToShelf = (book, shelf) => {
    update(book, shelf).then(res => {
      this.setState({ shelf: shelf });
      this.props.onBookMoved(book);
    });
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf} onChange={this.moveBook}>
          <option value="none" disabled>
            Move to...
          </option>
          {categories.map(category => (
            <option key={category.name} value={category.value}>
              {category.name}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
export default ShelfChanger;
