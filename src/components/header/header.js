import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Routes from '../../routes';

import './header.css';


const Header = () => {


        return (
            <header className="app-header row">
                <Link to={Routes.HOME}>
                    <div className="logo text-dark" >Online Library</div>
                </Link>
                <Link to={Routes.MY_BOOKS}>
                    <div className="my-books-link">
                        <i class="stack-icon fa fa-bars"/>
                        My books
                    </div>
                </Link>
            </header>
        );
};

export default Header;