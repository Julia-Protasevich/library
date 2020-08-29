import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {withLibraryService} from '../highOrderComponents';
import {LOGIN} from '../../routes/paths';

import './registerForm.css';

function RegisterForm({libraryService}) {

    const { register, handleSubmit, setError, errors } = useForm();

    const onSubmit = async (data) => {
        try{
            const res = await libraryService.register(data);
            console.log(res);

            //TODO redirect user to sign in page
        } catch (error) {
            if(error.response.status === 409) {
                setError("email", {
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

            <p className="h4 mb-4">Sign up</p>

            <input className="form-control mb-4" 
                placeholder="Screen name"
                name="name" 
                ref={register({required: true})} />

            <input className="form-control mb-4" 
                placeholder="E-mail"
                name="email" 
                ref={register({required: true})} />
            {errors.email && <p>{errors.email.message}</p>}


            <input className="form-control mb-4" 
                placeholder="Password"
                name="password" type="password" 
                ref={register({required: true})} />
                <small className="form-text text-muted mb-4">
                    At least 8 characters
                </small>

            <button className="btn btn-info btn-block my-4"
                type="submit">
                    Register
            </button>

            <Link to={LOGIN}>Already have an account?</Link>
        </form>
    );
};

export default withLibraryService()(RegisterForm);

