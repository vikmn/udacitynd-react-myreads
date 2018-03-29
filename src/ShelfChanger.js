import React, { Component } from 'react';
import './App.css'


class ShelfChanger extends Component{
  constructor(props) {
    super(props);
    console.log(props.shelf)
    this.state = { category: props.shelf };

  }
  
  setCategory = (event) => {
    this.setState({ category: event.target.value });
  }
  
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.category} onChange={this.setCategory}>
          <option value="none" disabled>Move to...</option>
          {this.props.categories.map(category =>
            <option key={category.name} value={category.value}>{category.name}</option>)}
            <option value="none">None</option>
        </select>
      </div>);
  }
}
export default ShelfChanger