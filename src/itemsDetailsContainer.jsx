import { useEffect, useState } from "react";
import Loading from "./loading";
import ItemDetail from "./ItemDetail";
import products from "./producto.json";
import { useParams } from "react-router-dom";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItem(id ? data.find((item) => item.id == id) : {});
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return <>{loading ? <Loading /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
