import * as Actions from "./actionNames.js";

/**
 * GENERAL BOOKS LIST
 */

const allBooksRequested = () => {
    return {
        type : Actions.LOAD_GENERAL_BOOKS_LIST
    };
};

const allBooksLoaded = (allBooksList) => {
    return {
        type: Actions.SAVE_GENERAL_BOOK_LIST,
        payload: allBooksList
    };
};

const allBooksError = (error) => {
    return {
        type: Actions.GENERAL_BOOKS_FAILURE,
        payload: error
    };
};

export const loadLibraryBooks = (libraryService) => () => (dispatch) =>{
    dispatch(allBooksRequested);
    return libraryService.getAllBooks()
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


//TODO: add auth actions