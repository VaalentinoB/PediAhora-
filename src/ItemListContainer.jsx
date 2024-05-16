import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import products from "./producto.json";
import Loading from "./loading";
import "./assets/styles/menu.css";
import { useParams } from "react-router-dom";

const fetchItems = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id ? products.filter((item) => item.category === id) : products);
    }, 1500);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div className="item-list-container">
      <h1 className="item-text">Que vas a pedir hoy?</h1>
      {loading ? <Loading /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
