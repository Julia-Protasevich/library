import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {withLibraryService} from '../highOrderComponents';
import {REGISTER} from '../../routes/paths';

import './loginForm.css';

function LoginForm({libraryService}) {

    const { register, handleSubmit, setError, errors } = useForm();

    const onSubmit = async (data) => {
        try{
            const res = await libraryService.login(data);
            console.log(res);

            //TODO redirect user to main, add token 
            //to localStore and bla-bla-bla
        } catch (error) {
            if(error.response.status === 401) {
                setError("password", {
                    type: "manual",
                    message: error.response.data
                });
            }
            else throw error;
        }
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
            {errors.password && <p>{errors.password.message}</p>}


            <button className="btn btn-info btn-block my-4"
                type="submit">
                    Sign in
            </button>

            <Link to={REGISTER}>Don't have an account?</Link>
        </form>
    );
};

export default withLibraryService()(LoginForm);
