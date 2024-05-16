import "./assets/styles/details.css";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="item-card">
        <img src={item.imageUrl} alt={item.name} className="item-image" />
        <div className="item-details">
          <h3 className="item-name">{item.name}</h3>
          <h4 className="item-description">{item.description}</h4>
          <p className="item-price">Precio: ${item.price}</p>
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
