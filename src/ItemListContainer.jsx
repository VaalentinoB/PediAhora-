import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
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
    const itemsCollection = collection(db, "items");
    const resultQuery = query(
      itemsCollection,
      where("category", "==", "Sandwich")
    );
    getDocs(resultQuery).then((snapShot) => {
      console.log(snapShot);
      if (snapShot.size > 0) {
        console.log("Existen Documentos!");
        console.log(snapShot.docs);
        setItems(
          snapShot.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
        setLoading(false);
      } else {
        console.log("No existen Documentos!");
        setItems([]);
      }
    });
  }, [id]);

  return (
    <div className="item-list-container">
      <h1 className="item-text">Que vas a pedir hoy?</h1>
      {loading ? <div>Cargando..</div> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
