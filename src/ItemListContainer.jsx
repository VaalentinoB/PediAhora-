import { useEffect } from "react";
import { useState } from "react";

const Greeting = (props) => {
  return (
    <div className="greeting-container">
      <h1>{props.greeting}</h1>
    </div>
  );
};

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nombre: "Buzo 1",
          tipo: "buzo",
          precio: 1200,
        },

        {
          id: 2,
          nombre: "Remera 1",
          tipo: "remera",
          precio: 500,
        },
        {
          id: 3,
          nombre: "Remera Oz",
          tipo: "remera",
          precio: 5000,
        },
        {
          id: 2,
          nombre: "Buzo oz 1",
          tipo: "Buzardo",
          precio: 2500,
        },
      ]);
    }, 3000);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
    };
    fetchData();
  }, []);
  return <div className="list-container"></div>;
};

export default Greeting;
