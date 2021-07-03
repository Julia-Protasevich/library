import React from 'react';

import LibraryBookItem from '../libraryBookItem';

import './libraryBookList.css';

const LibraryBookList = ({books, onBookBook, onRemoveBook, isAdmin}) => {
    const params = isAdmin 
        ? {
            handler:onRemoveBook,
            btnClass:'btn-danger',
            btnName:'Remove'
        }
        : {
            handler:onBookBook,
            btnClass:'btn-info',
            btnName:'Book'
        }

    const clickHandler = (e) => {
        const id = e.target.dataset.id;
        params.handler(id);
    };

    return (
        <ul 
            className="book-list"
            onClick={clickHandler}
        >
            {
                books.map((book) => {
                    return (
                        <li key={book._id}>
                            <LibraryBookItem
                                    book={book}
                                    btnClass={params.btnClass}
                                    btnName={params.btnName}
                            />
                        </li>
                    )
                }) 
            }
        </ul>
    )
}

export default LibraryBookList;