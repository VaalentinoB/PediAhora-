import { useEffect, useState } from "react";
import Loading from "./loading";
import ItemDetail from "./ItemDetails";
import products from "./producto.json";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = products.find((item) => item.id === 1);
      resolve(producto);
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return <>{loading ? <Loading /> : <ItemDetail items={items} />}</>;
};

export default ItemDetailContainer;
