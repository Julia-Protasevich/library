import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './header.css';


const Header = () => {


        return (
            <header className="app-header row">
                <Link to="/">
                    <div className="logo text-dark" >Online Library</div>
                </Link>
                <Link to="/mybooks">
                    <div className="my-books-link">
                        <i class="stack-icon fa fa-bars"/>
                        My books
                    </div>
                </Link>
            </header>
        );
};

export default Header;