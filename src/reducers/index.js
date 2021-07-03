import updateLibraryBookList from './libraryBookList';

const reducer = (state, action) => {
    return {
        bookList: updateLibraryBookList(state, action)
    };
};

export default reducer;