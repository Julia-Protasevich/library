import {
    REQUESTED_GENERAL_BOOKS_LIST, 
    LOADED_GENERAL_BOOKS_LIST, 
    ERROR_GENERAL_BOOKS_LIST,
    BOOK_BOOK,
    REMOVE_BOOK
} from '../actions/actionNames.js';


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
        case BOOK_BOOK: //TODO: will be replaced with real code
            return { 
                books: [],
                loading: false,
                error: null
            };
        case REMOVE_BOOK: //TODO: will be replaced with real code
            return {
                books: [],
                loading: false,
                error: null
            }
        default: 
            return state.bookList;
    }
};

export default updateLibraryBookList;