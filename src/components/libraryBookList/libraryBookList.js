import React, {Component} from 'react';

import LibraryBookItem from './libraryBookItem';
import {withLibraryService} from '../highOrderComponents';
import {bookBook, removeBook, loadLibraryBooks} from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../errorBoundry/errorIndicator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './libraryBookList.css';

const LibraryBookList = ({books, onBookBook, onRemoveBook}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <LibraryBookItem
                                book={book}
                                onBookBook={() => onBookBook(book.id)}
                                onRemoveBook={() => onRemoveBook(book.id)}/>
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
        const {books, loading, error, onBookBook, onRemoveBook} = this.props;

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
                />;
    }
};

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return { books, loading, error} 
}

const mapDispatchToProps = (dispatch, {libraryService}) => {
    
    return bindActionCreators({
        loadLibraryBooks: loadLibraryBooks(libraryService),
        onBookBook: bookBook,
        onRemoveBook: removeBook
    }, dispatch) 

};

export default withLibraryService()(
    connect(mapStateToProps, mapDispatchToProps)(LibraryBookListContainer)
);