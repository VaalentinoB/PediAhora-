import { useEffect, useState } from "react";
import Loading from "../Pages/loading";
import ItemDetail from "./ItemDetails";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "item", id);
    getDoc(docRef).then((snapShot) => {
      if (snapShot.exists()) {
        setItem({ id: snapShot.id, ...snapShot.data() });
        setLoading(false);
      } else {
        console.log("No existe el Documento!");
        setItem({});
      }
    });
  }, [id]);

  return <>{loading ? <Loading /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
