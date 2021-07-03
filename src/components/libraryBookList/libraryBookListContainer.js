import React, {Component} from 'react';
import LibraryBookList from './libraryBookList';
import {withLibraryService} from '../highOrderComponents';
import {bookBook, removeBook, loadLibraryBooks} from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../errorBoundry/errorIndicator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
    return { books, loading, error};
}

const mapDispatchToProps = (dispatch, {libraryService}) => {
    return bindActionCreators({
        loadLibraryBooks: loadLibraryBooks(libraryService),
        onBookBook: bookBook(libraryService),
        onRemoveBook: removeBook(libraryService)
    }, dispatch);
};

export default withLibraryService()(
    connect(mapStateToProps, mapDispatchToProps)(LibraryBookListContainer)
);