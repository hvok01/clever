import React from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';

function Thanks() {
  return (
    <div className='thanks'>
        <h1>Gracias por tu compra!</h1>
        <p>Podes seguir revisando nuestors productos desde <Link to={`/`}>aca</Link> </p>
    </div>
  )
}

export default Thanks;
