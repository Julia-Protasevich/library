import {
    REQUESTED_USERS_BOOKS_LIST, 
    LOADED_USERS_BOOKS_LIST, 
    ERROR_USERS_BOOKS_LIST, 
    RELEASE_BOOK
} from '../actions/actionNames.js';

const updateUsersBookList = (state, action) => {

    if(state === undefined) {
        return {
            books: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case REQUESTED_USERS_BOOKS_LIST:
            return {
                books: [],
                loading: true,
                error: null
            };
        case LOADED_USERS_BOOKS_LIST :
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        case ERROR_USERS_BOOKS_LIST: 
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        case RELEASE_BOOK: //TODO: will be replaced with real code
            return { 
                books: [],
                loading: false,
                error: null
            };
        default: 
            return state.bookList;
    }
}

export default updateUsersBookList;