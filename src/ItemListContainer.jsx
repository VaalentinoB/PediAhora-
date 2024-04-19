import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, nombre: "Product 1", precio: 10 },
        { id: 2, nombre: "Product 2", precio: 20 },
        { id: 3, nombre: "Product 3", precio: 30 },
      ]);
    }, 3000);
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
      <h1>Que vas a pedir hoy?</h1>
      {loading ? <div>Cargando..</div> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
