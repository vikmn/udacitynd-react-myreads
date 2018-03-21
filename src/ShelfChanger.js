import React, { Component } from 'react';
import './App.css'
const categories = [
  {name:"Currently Reading", value:"currentlyReading"},
  {name:"Want to Read", value:"wantToRead"},
  { name: "Read", value: "Read" },
  {name:"None",value:"none"}];
class ShelfChanger extends Component{
    render() {
        return(
        <div className="book-shelf-changer">
        <select>
              <option value="none" disabled>Move to...</option>
              {categories.map(category =>
                <option key={category.value} value={category.value}>{category.name}</option>)}
        </select>
      </div>)
    }
}
export default ShelfChanger