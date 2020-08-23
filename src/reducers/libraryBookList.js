import {
    REQUESTED_GENERAL_BOOKS_LIST, 
    LOADED_GENERAL_BOOKS_LIST, 
    ERROR_GENERAL_BOOKS_LIST,
    BOOK_BOOK,
    REMOVE_BOOK
} from '../actions/actionNames.js';

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

const updateLibraryBookList = (state, action) => {
    if(state === undefined) {
        return {
            books: [],
            loading: true,
            error: null
        }
    }
    switch (action.type) {
        case REQUESTED_GENERAL_BOOKS_LIST:
            return {
                books: [],
                loading: true,
                error: null
            };
        case LOADED_GENERAL_BOOKS_LIST :
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        case ERROR_GENERAL_BOOKS_LIST: 
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        case BOOK_BOOK: //both actions mean that the book should disappear from this list
        case REMOVE_BOOK: 
            return removeBook(state, action.payload);
        default: 
            return state.bookList;
    }
};

export default updateLibraryBookList;