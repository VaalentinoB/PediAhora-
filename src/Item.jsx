import "./ItemList";

const Item = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <img src={item.imageUrl} alt={item.name} className="card-image" />
        <div className="card-details">
          <h3 className="card-title">{item.name}</h3>
          <p className="card-price">Precio: ${item.price}</p>
          <p className="card-restaurant">{item.restaurant}</p>
          <div className="button-wrapper"></div>
          <button className="detail-btn">Ver detalle</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
