import React from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { firebaseConfig } from "../../Config/DBConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getItemsFromDatabase() {
  const productsColectionRef = collection(db, "products");
  let snapshotProducts = await getDocs(productsColectionRef);
  const documents = snapshotProducts.docs;

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

async function getSingleItemFromDatabase(idItem) {
  // referencia de la colección y del documento
  const productsColectionRef = collection(db, "products");
  const docRef = doc(productsColectionRef, idItem);

  // getDoc -> datos
  const docSnapshot = await getDoc(docRef);

  // extra
  if (docSnapshot.exists() === false) throw new Error("No existe el documento");

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

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
    let allItems = id
      ? await getSingleItemFromDatabase(id)
      : await getItemsFromDatabase();
    if (allItems) {
      setResults(allItems);
      setLoader(false);
    } else {
      setLoader(false);
    }
  };

  return (
    <div className="ItemDetailContainer">
      {loader ? (
        <div className="loader">...</div>
      ) : (
        <ItemDetail item={results} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
