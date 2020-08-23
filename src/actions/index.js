import * as Actions from "./actionNames.js";

/**
 * GENERAL BOOKS LIST
 */

const allBooksRequested = () => {
    return {
        type : Actions.REQUESTED_GENERAL_BOOKS_LIST
    };
};

const allBooksLoaded = (allBooksList) => {
    return {
        type: Actions.LOADED_GENERAL_BOOKS_LIST,
        payload: allBooksList
    };
};

const allBooksError = (error) => {
    return {
        type: Actions.ERROR_GENERAL_BOOKS_LIST,
        payload: error
    };
};

export const loadLibraryBooks = (libraryService) => () => (dispatch) =>{
    dispatch(allBooksRequested);
    libraryService.getAllBooks()
        .then((data) => dispatch(allBooksLoaded(data.data)))
        .catch((error) => dispatch(allBooksError(error)));
}

export const removeBook = (libraryService) => (bookId) => (dispatch) => {
    libraryService.deleteBook(bookId)
        .then((data) => dispatch({
            type: Actions.REMOVE_BOOK,
            payload: bookId
        }))
        .catch((error) => dispatch(allBooksError(error)));
};

export const bookBook = (libraryService) => (bookId) => (dispatch) => {
    libraryService.bookBook(bookId, '5ed4e6ba700b317c8cddcda7')
        .then((data) => dispatch({
            type: Actions.BOOK_BOOK,
            payload: bookId
        }))
        .catch((error) => dispatch(allBooksError(error)));
};


/**
 * USER'S BOOKS LIST
 */

export const usersBooksRequested = () => {
    return {
        type : Actions.REQUESTED_USERS_BOOKS_LIST
    };
};

export const usersBooksLoaded = (allBooksList) => {
    return {
        type: Actions.LOADED_USERS_BOOKS_LIST,
        payload: allBooksList
    };
};

export const usersBooksError = (error) => {
    return {
        type: Actions.ERROR_USERS_BOOKS_LIST,
        payload: error
    };
};

export const releaseBook = (bookId) => {
    return {
        type: Actions.RELEASE_BOOK,
        payload: bookId
    };
};


//TODO: add auth actions