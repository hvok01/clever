import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({items}) {

  return (
    <div className="ItemList">
        {
          items && items.length > 0 ? (
            items.map((item, key) => {
              return (
                <div key={key} className="ItemContainer">
                  <Item item={item}/>
                </div>
              )
            })
          ) : null
        }
    </div>
  );
}

export default ItemList;
