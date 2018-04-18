import React, { Component } from "react";
import { update } from "./BooksAPI";
import "./App.css";

class ShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = { shelf: props.shelf };
  }

  moveToShelf = event => {
    this.moveBookToShelf(this.props.book, event.target.value);
  }

  moveBookToShelf = (book, shelf) => {
    update(book, shelf).then(res => {
      this.setState({ shelf: shelf });
      this.props.handleMoveToShelf(book);
    });
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf} onChange={this.moveToShelf}>
          <option value="none" disabled>
            Move to...
          </option>
          {this.props.categories.map(category => (
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
