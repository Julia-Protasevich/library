import React, {Component} from 'react';

import LoginForm from './loginForm';
import './header.css';


const Header = () => {


        return (
            <div className="app-header d-flex">
                <h1>Online library</h1>
                <LoginForm />
            </div>
        );
};

export default Header;