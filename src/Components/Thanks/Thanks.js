import React from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';

function Thanks() {
  return (
    <div className='thanks'>
        <h1>Thank you!</h1>
        <p>Keep shopping from <Link to={`/`}>here</Link> </p>
    </div>
  )
}

export default Thanks;
