import React,{ Component } from 'react'
import ShelfChanger from './ShelfChanger'
import './App.css'

class BooksGrid extends Component{
    render() {
        return (<div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book =>
              <li key={book.name}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.backgroundImage})` }}/>
                    <ShelfChanger categories={this.props.categories}/>
                  </div>
                  <div className="book-title">{book.name}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>)}
          </ol>
      </div>)
    }
}

export default BooksGrid