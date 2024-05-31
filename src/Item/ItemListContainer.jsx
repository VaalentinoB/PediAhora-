import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "item");
    const resultQuery = id
      ? query(itemsCollection, where("category", "==", id))
      : itemsCollection;
    getDocs(resultQuery).then((snapShot) => {
      if (snapShot.size > 0) {
        console.log("Existen Documentos!");
        setItems(
          snapShot.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
        setLoading(false);
      } else {
        console.log("No existen");
        setItems([]);
      }
    });
  }, [id]);

  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemsCollection = collection(db, "item");
  //   products.forEach((producto) => {
  //     addDoc(itemsCollection, producto);
  //   });
  //   console.log("Prods cargados en la base de datos");
  // }, []);

  return (
    <div className="item-list-container">
      <h1 className="item-text">Que vas a pedir hoy?</h1>
      {loading ? <div>Cargando..</div> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
