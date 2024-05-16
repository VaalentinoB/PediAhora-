import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import arrayProductos from "./producto.json";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arrayProductos);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(id ? data.filter((item) => item.category == id) : data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div className="item-list-container">
      <h1 className="item-text">Que vas a pedir hoy?</h1>
      {loading ? <div>Cargando..</div> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
