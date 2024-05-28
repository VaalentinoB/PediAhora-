import { useEffect, useState } from "react";
import Loading from "../Pages/loading";
import ItemDetail from "./ItemDetails";
import products from "../producto.json";
import { useParams } from "react-router-dom";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(id ? data.find((item) => item.id == id) : {});
      setLoading(false);
    };

    fetchData();
  }, [id]);
  //
  return <>{loading ? <Loading /> : <ItemDetail items={items} />}</>;
};

export default ItemDetailContainer;
