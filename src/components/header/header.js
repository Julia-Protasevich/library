import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HOME, MY_BOOKS} from '../../routes/paths';

import './header.css';


const Header = () => {


        return (
            <header className="app-header row">
                <Link to={HOME}>
                    <div className="logo text-dark" >Online Library</div>
                </Link>
                <Link to={MY_BOOKS}>
                    <div className="my-books-link">
                        <i class="stack-icon fa fa-bars"/>
                        My books
                    </div>
                </Link>
            </header>
        );
};

export default Header;