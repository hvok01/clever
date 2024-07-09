import React from 'react';
import "./404.css";
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='NotFoundContainer'>
        404
        <Link to={`/`}>Go back</Link>
    </div>
  )
}
export default NotFound;