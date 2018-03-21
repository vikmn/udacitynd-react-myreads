import React, { Component } from 'react';
import './App.css'

class ShelfChanger extends Component{
    render() {
        return(
        <div className="book-shelf-changer">
        <select>
              <option value="none" disabled>Move to...</option>
              {this.props.categories.map(category =>
                <option key={category.value} value={category.value}>{category.name}</option>)}
        </select>
      </div>)
    }
}
export default ShelfChanger