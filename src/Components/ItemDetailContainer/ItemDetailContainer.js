import React from 'react';
import { MockData } from '../../MockData/MockData';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {

  const [results, setResults] = React.useState([]);
  const [loader, setLoader] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    getData(id);
  }, [id]);

  const getData = async (id) => {
    setLoader(true);
    const mkPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let items = id ? MockData.filter((item) => item.id === Number(id)) : MockData;
        resolve(items);
      }, 3000);
    });
    mkPromise.then((results) => {
      setResults(results);
      setLoader(false);
    });
  };

  return (
    <div className="ItemDetailContainer">
        {
            loader ? (
                <div className="loader">
                    ...
                </div>
            ) : (
                <ItemDetail item={results[0]}/>
            )
        }
    </div>
  );
}

export default ItemDetailContainer;
