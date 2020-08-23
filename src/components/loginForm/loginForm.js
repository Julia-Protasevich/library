import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {withLibraryService} from '../highOrderComponents';


import './loginForm.css';

function LoginForm() {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        
    };
  
    return (
        <form className="text-center border border-light p-5" 
                onSubmit={handleSubmit(onSubmit)}>
            
            <p className="h4 mb-4">Sign in</p>
            <input className="form-control mb-4" 
                placeholder="E-mail"
                name="email" 
                ref={register({required: true})} />

            <input className="form-control mb-4" 
                placeholder="Password"
                name="password" type="password" 
                ref={register({required: true})} />

            <button className="btn btn-info btn-block my-4"
                type="submit">
                    Sign in
            </button>

            <Link to="/register">Don't have an account?</Link>
        </form>
    );
};

export default withLibraryService()(LoginForm);
