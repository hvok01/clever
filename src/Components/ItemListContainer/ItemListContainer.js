import React from 'react';
import { MockData } from '../../MockData/MockData';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom'

function ItemListContainer({greetings}) {

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
        let items = id ? MockData.filter((item) => item.category === Number(id)) : MockData;
        resolve(items);
      }, 2000);
    });
    mkPromise.then((results) => {
      setResults(results);
      setLoader(false);
    });
  };

  return (
    <div className="ItemListContainer">
        {
          loader ? (
            <div>
              loading...
            </div>
          ) : <ItemList items={results}/>
        }
    </div>
  );
}

export default ItemListContainer;
