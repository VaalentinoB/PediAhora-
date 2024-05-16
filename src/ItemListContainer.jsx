import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import products from "./producto.json";
import Loading from "./loading";
import "./assets/styles/menu.css";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="item-list-container">
      <h1 className="item-text">Que vas a pedir hoy?</h1>
      {loading ? <Loading /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
