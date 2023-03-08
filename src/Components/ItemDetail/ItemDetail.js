import React from 'react';
import './ItemDetail.css';

function ItemDetail({item}) {

  return (
    <div className="Item">
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
        </div>
    </div>
  );
}

export default ItemDetail;
