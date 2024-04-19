import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: " Restaurante el gauchito", price: 10 },
        { id: 2, name: "Restaurante Picolino", price: 20 },
        { id: 3, name: "Restaurante tu viejo", price: 30 },
      ]);
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
      <h1>Que vas a pedir hoy?</h1>
      {loading ? <div>Cargando..</div> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
