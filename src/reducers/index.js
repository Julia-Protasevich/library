import updateLibraryBookList from './libraryBookList';
import updateUsersBookList from './userBookList';

const reducer = (state, action) => {
   
    return {
        bookList: updateLibraryBookList(state, action),  
        userBookList: updateUsersBookList(state, action) 
    };
};

export default reducer;