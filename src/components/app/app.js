import React, {Component} from 'react';

import Header from '../header';
import BooksList from '../booksList';

import './app.css';

export default class App extends Component{

    state = {
        bookList: [
            {id: 1, label: 'Book 1', taken: false},
            {id: 2, label: 'Book 2', taken: false},
            {id: 3, label: 'Book 3', taken: true},
            {id: 4, label: 'Book 4', taken: false},
            {id: 5, label: 'Book 5', taken: true},
            {id: 6, label: 'Book 6', taken: false},
            {id: 7, label: 'Book 7', taken: false},
            {id: 8, label: 'Book 8', taken: false}

        ],
        booksOfCurrentUser: [
            {id: 9, label: 'Book 9', isMyBooksList: true},
            {id: 10, label: 'Book 10', isMyBooksList: true}
        ]
    };

    deleteItem = (id) => {
        this.setState(({bookList}) => {
            const idx = bookList.findIndex((el) => el.id===id);

            //TODO send delete request

            const finalArray = [
                ...bookList.slice(0, idx), 
                ...bookList.slice(idx +1)
            ];

            return {
                bookList: finalArray
            };
        })
    };

    returnBook = (id) => {

        this.setState(({booksOfCurrentUser, bookList}) => {
            const idx = booksOfCurrentUser.findIndex((el) => el.id===id);

            let bookToRelease = booksOfCurrentUser[idx];
            bookToRelease.taken = false;
            bookToRelease.isMyBooksList = false;

            const booksOfCurrentUserFinalArray = [
                ...booksOfCurrentUser.slice(0, idx), 
                ...booksOfCurrentUser.slice(idx +1)
            ];
            const bookListFinalArray = bookList.concat(bookToRelease);

            return {
                booksOfCurrentUser: booksOfCurrentUserFinalArray, 
                bookList: bookListFinalArray
            };
        })

    };

    bookBook = (id) => {
        this.setState(({booksOfCurrentUser, bookList}) => {
            const idx = bookList.findIndex((el) => el.id===id);

            let bookToBook = bookList[idx];
            //bookToBook.taken = false;
            bookToBook.isMyBooksList = true;

            const bookListFinalArray = [
                ...bookList.slice(0, idx), 
                ...bookList.slice(idx +1)
            ];
            const booksOfCurrentUserFinalArray = booksOfCurrentUser.concat(bookToBook);

            return {
                booksOfCurrentUser: booksOfCurrentUserFinalArray, 
                bookList: bookListFinalArray
            };
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="book-list-container col-md-6">
                            <h3>Library books</h3>
                            <BooksList 
                                booksList={this.state.bookList} 
                                onRemoveBook={this.deleteItem}
                                onBookBook={this.bookBook}/>

                        </div>

                        <div className="book-list-container col-md-6">
                            <h3>Books that I'm reading</h3>
                            <BooksList 
                                booksList={this.state.booksOfCurrentUser}
                                onReturnBook={this.returnBook}
                                />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
};