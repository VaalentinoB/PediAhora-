import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import Item from "./Item";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arrayProductos);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    getDocs(itemCollection).then((snapShot) => {
      setItems(snapShot.docs.map((item) => ({ id: item.id, ...item.data() })));
      setLoading(false);
    });
  });

  return (
    <div className="item-list-container">
      <h1 className="item-text">Que vas a pedir hoy?</h1>
      {loading ? <div>Cargando..</div> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
