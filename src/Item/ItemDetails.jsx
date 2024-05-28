import "../assets/styles/details.css";
import ItemCount from "../Counter/counter";

const ItemDetail = ({ items }) => {
  return (
    <>
      <div className="item-card">
        <img src={items.imageUrl} alt={items.name} className="item-image" />
        <div className="item-details">
          <h3 className="item-name">{items.name}</h3>
          <h4 className="item-description">{items.description}</h4>
          <p className="item-price">Precio: ${items.price}</p>
          <ItemCount
            stock={10}
            initial={1}
            onAdd={(count) => console.log("Cantidad agregada", count)}
          />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
