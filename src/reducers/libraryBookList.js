import {
    LOAD_GENERAL_BOOKS_LIST, 
    SAVE_GENERAL_BOOK_LIST, 
    GENERAL_BOOKS_FAILURE,
    BOOK_BOOK,
    REMOVE_BOOK
} from '../actions/actionNames.js';
import defaultStateValue from './defaultStateValue';

const removeBook = (state, bookId) => {
    const{bookList: {books}} = state;
    const index = books.findIndex((book) => book._id === bookId);
    return {
        error: false,
        loading: false,
        books: [
            ...books.slice(0, index),
            ...books.slice(index+1)
        ]
    };
};

const updateLibraryBookList = (state = defaultStateValue, action) => {
    switch (action.type) {
        case LOAD_GENERAL_BOOKS_LIST:
            return {
                books: [],
                loading: true,
                error: null
            };
        case SAVE_GENERAL_BOOK_LIST :
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        case GENERAL_BOOKS_FAILURE: 
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        case BOOK_BOOK: //both actions mean that the book should disappear from this list
        case REMOVE_BOOK: 
            return removeBook(state, action.payload);
        default: 
            return state;
    }
};

export default updateLibraryBookList;