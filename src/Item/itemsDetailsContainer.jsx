import { useEffect, useState } from "react";
import Loading from "../Pages/loading";
import ItemDetail from "./ItemDetails";
import { useParams } from "react-router-dom";
import { doc, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "item", id);
    getDocs(docRef).then((snapShot) => {
      if (snapShot.exists()) {
        console.log("Existen Documentos!");
        setItems(setItems({ id: snapShot.id, ...snapShot.data() }));
        setLoading(false);
      } else {
        console.log("No existen docs");
        setItems([]);
      }
    });
  }, [id]);

  return <>{loading ? <Loading /> : <ItemDetail items={items} />}</>;
};

export default ItemDetailContainer;
