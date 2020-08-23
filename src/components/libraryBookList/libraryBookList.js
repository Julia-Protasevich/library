import React, {Component} from 'react';

import LibraryBookItem from '../libraryBookItem';
import {withLibraryService} from '../highOrderComponents';
import {bookBook, removeBook, loadLibraryBooks} from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../errorBoundry/errorIndicator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './libraryBookList.css';

const LibraryBookList = ({books, onBookBook, onRemoveBook, isAdmin}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    let bookItem;
                    if(isAdmin){
                        bookItem = <LibraryBookItem
                                        book={book}
                                        onBtnClick={() => onRemoveBook(book._id)}
                                        btnClass='btn-danger'
                                        btnName='Remove'
                                />
                    } else {
                        bookItem = <LibraryBookItem
                                        book={book}
                                        onBtnClick={() => onBookBook(book._id)}
                                        btnClass='btn-info'
                                        btnName='Book'
                />
                    }
                    return (
                        <li key={book._id}>
                            {bookItem}
                        </li>
                    )
                })
            }
        </ul>
    )
}
class LibraryBookListContainer extends Component{
    componentDidMount() {
        this.props.loadLibraryBooks();
    }

    render() {
        const {books, loading, error, onBookBook, onRemoveBook, libraryService} = this.props;

        if( loading) {
            return <Spinner/>;
        }

        if(error) {
            return <ErrorIndicator />;
        }

        return <LibraryBookList 
                    books={books} 
                    onBookBook={onBookBook} 
                    onRemoveBook={onRemoveBook}
                    isAdmin={libraryService.isAdmin}
                />;
    }
};

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return { books, loading, error} 
}

const mapDispatchToProps = (dispatch, {libraryService}) => {
    
    return bindActionCreators({
        loadLibraryBooks: loadLibraryBooks(libraryService),
        onBookBook: bookBook(libraryService),
        onRemoveBook: removeBook(libraryService)
    }, dispatch) 

};

export default withLibraryService()(
    connect(mapStateToProps, mapDispatchToProps)(LibraryBookListContainer)
);