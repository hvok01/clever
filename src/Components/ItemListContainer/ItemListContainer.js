import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '../../Config/DBConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async await
//1. Obtener la referencia a mi colección "products"
//2. Llamamos a getDocs con dicha colección
//3. Dentro de la respuesta tenemos un array de documentos
//4. Extraemos los datos con doc.data()
async function getItemsFromDatabase() {
  const productsColectionRef = collection(db, "products");
  let snapshotProducts = await getDocs(productsColectionRef);
  const documents = snapshotProducts.docs;

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

async function getItemsByCategoryFromDatabase(categoryURL) {
  const productsColectionRef = collection(db, "products");

  const q = query(productsColectionRef, where("category", "==", Number(categoryURL)));

  let snapshotProducts = await getDocs(q);
  const documents = snapshotProducts.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

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
    let allItems = id ? await getItemsByCategoryFromDatabase(id) : await getItemsFromDatabase();
    if(allItems) {
      setResults(allItems);
      setLoader(false);
    } else {
      setLoader(false);
    }
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
