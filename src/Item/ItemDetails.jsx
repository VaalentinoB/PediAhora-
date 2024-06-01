import { useContext } from "react";
import "../assets/styles/details.css";
import ItemCount from "../Counter/counter";
import { CartContext } from "../context/context";

const ItemDetail = ({ items }) => {
  const { addItem } = useContext(CartContext);
  return (
    <>
      <div className="item-card">
        <img src={items.imageUrl} alt={items.name} className="item-image" />
        <div className="item-details">
          <h3 className="item-name">{items.name}</h3>
          <h4 className="item-description">{items.description}</h4>
          <p className="item-price">Precio: ${items.price}</p>
          <ItemCount stock={items.stock} initial={1} onAdd={addItem} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
