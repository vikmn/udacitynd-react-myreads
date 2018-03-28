import React, { Component } from 'react'
import BooksGrid from './BooksGrid'
import './App.css'

const books = [{
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    backgroundImage: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
},
{
    name: "Ender's Game",
    author: "Orson Scott Card",
    backgroundImage: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
}];
const categories = [
    {
        name: "Currently Reading",
        value: "currentlyReading"
    },
    {
        name: "Want to Read",
        value: "wantToRead"
    },
    {
        name: "Read",
        value: "read"
    },
]

class BookSearch extends Component{
    render() {
        return (<div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                    {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
                    <input type="text" placeholder="Search by title or author" />
                </div>
            </div>
            <div className="search-books-results">
                <BooksGrid books={books} categories={categories} shelf={{ value: "none" } }/>
            </div>
        </div>);
    }
}

export default BookSearch