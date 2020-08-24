import React from 'react';

import LibraryBookItem from '../libraryBookItem';

import './libraryBookList.css';

const LibraryBookList = ({books, onBookBook, onRemoveBook, isAdmin}) => {
    return (
        <ul className="book-list">
            {
                isAdmin ?
                    books.map((book) => {
                        return (
                            <li key={book._id}>
                                <LibraryBookItem
                                        book={book}
                                        onBtnClick={() => onRemoveBook(book._id)}
                                        btnClass='btn-danger'
                                        btnName='Remove'
                                />
                            </li>
                        )
                    }) 
                :   books.map((book) => {
                        return (
                            <li key={book._id}>
                                <LibraryBookItem
                                        book={book}
                                        onBtnClick={() => onBookBook(book._id)}
                                        btnClass='btn-info'
                                        btnName='Book'
                                />
                            </li>
                        )
                    }) 
            }
        </ul>
    )
}

export default LibraryBookList;