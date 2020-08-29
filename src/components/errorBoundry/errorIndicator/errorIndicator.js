import React from 'react';
import './errorIndicator.css';

const ErrorIndicator = ({error}) => {
    return (
    <div>Error! {error}</div>
    )
}

export default ErrorIndicator;