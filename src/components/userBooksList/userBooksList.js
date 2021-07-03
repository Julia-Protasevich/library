import React, {Component} from 'react';
import {withLibraryService} from '../highOrderComponents';
import Spinner from '../spinner';
import ErrorIndicator from '../errorBoundry/errorIndicator';
import LibraryBookItem from '../libraryBookItem';

class UserBooksList extends Component {

    state = {
        loading: true,
        error: false,
        books: []
    };

    clickHandler = (e) => {
        const id = e.target.dataset.id;
        this.releaseBook(id);
    };

    updateBooks = () => {
        return this.props.libraryService.getUsersBooks('5ed4e6ba700b317c8cddcda7')
        .then((data) => {
            this.setState({
                loading: false,
                error: false,
                books: data.data
            });
         })
        .catch((error) => {
            this.setState({
                loading: false,
                error: error,
                books: []
            });
        });
    };

    componentDidMount() {
        this.updateBooks();
    };

    releaseBook = (id) => {
        return this.props.libraryService.releaseBook(id)
            .then(this.updateBooks)
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: error,
                    books: []
                });
            })
    };

    render () {
        const {loading, error, books} = this.state;
        if( loading) {
            return <Spinner/>;
        }

        if(error) {
            return <ErrorIndicator />;
        }

        return (
            <ul 
                className="book-list"
                onClick={this.clickHandler}
            >
                {
                    books.map((book) => {
                        return (
                            <li key={book._id}>
                                <LibraryBookItem
                                    book={book}
                                    onBtnClick={() => this.releaseBook(book._id)}
                                    btnClass='btn-info'
                                    btnName='Release book'
                                />
                            </li>
                        )
                    })
                }
            </ul>
        )
    };
};

export default withLibraryService()(UserBooksList);