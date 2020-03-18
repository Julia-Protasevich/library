import React from 'react';

import BookItem from './bookItem';
import './booksList.css';


const BooksList = ({booksList, onRemoveBook, onReturnBook, onBookBook}) => {

    const elements = booksList.map((item) => {
        const {
            id,
            ...itemProps
        } = item;

        return (
            <li key={id} className=" list-group-item book-item">
                <BookItem
                    {...itemProps}
                    onRemoveBook={()=> onRemoveBook(id)}
                    onReturnBook={()=> onReturnBook(id)}
                    onBookBook={()=> onBookBook(id)}
                />
            </li>
        )
    });

    return(
            <ul className="list-group books-list">
                {elements}
            </ul>
    );
};

export default BooksList;