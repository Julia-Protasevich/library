import React from 'react';
import './libraryBookItem.css';

const LibraryBookItem = ({book, onBookBook, onRemoveBook}) => {
    const {imageURL, name, author, description} = book;

    return (
        <div className="library-book"> 
            <div className="book-cover">
                <img src={imageURL} alt="cover"/>
            </div>
            <div className="book-details">
                <span className="book-title">{name}</span>
                <div className="book-author">{author}</div>
                <div className="book-description">{description}</div>

                <button
                    className="btn btn-info"
                    onClick={onBookBook}>
                    Book
                </button>
                <button
                    className="btn btn-danger"
                    onClick={onRemoveBook}>
                    Remove
                </button>
            </div>
        </div>
    )
};

export default LibraryBookItem;