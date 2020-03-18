import React, {Component} from 'react';

import './bookItem.css';


export default class BookItem extends Component{

    constructor(){
        super();
        this.state = {

        }
    }

    render() {
        let  classNames = 'book-item-span';
        const {label, taken, isMyBooksList, isAdmin} = this.props;
        let button;

        if(taken){
            classNames += ' taken';
        }



        return (
            <span className={classNames}>
                {label}

                {
                    !taken && !isMyBooksList &&
                        <button type="button" className="btn btn-primary btn-success"
                                data-toggle="tooltip" data-placement="bottom" 
                                title="Book this book"
                                onClick={this.props.onBookBook}>
                            <i className="fa fa-arrow-circle-o-down"></i>
                        </button>
                }
                
                {
                    isAdmin &&
                        <button type="button" className="btn btn-primary btn-danger"
                                data-toggle="tooltip" data-placement="bottom" 
                                title="Remove this book"
                                onClick={this.props.onRemoveBook}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                }

                {
                    isMyBooksList && 
                        <button type="button" className="btn btn-primary btn-warning"
                                data-toggle="tooltip" data-placement="bottom" 
                                title="Return this book"
                                onClick={this.props.onReturnBook}>
                            <i className="fa fa-arrow-circle-o-up"></i>
                        </button>
                }
                
                
            </span>

            
        );
    }
};