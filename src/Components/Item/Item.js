import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item({item}) {

  return (
    <div className="ItemSolo">
        <div className="ItemImageContainer">
            <img src={item.imageUrl} alt={item.title}/>
        </div>
        <div className="ItemInfoContainer">
            <span>
                <h1>
                    { item.title }
                </h1>
            </span>
            <p>
                { item.detail }
            </p>
            <p>
                price: ${ item.price }
            </p>
            <span className="ItemProductLink">
                <Link to={`/product/${item.id}`} className="ItemLink">More</Link>
            </span>
        </div>
    </div>
  );
}

export default Item;
