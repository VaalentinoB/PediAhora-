import "./ItemList";
import ItemCount from "./counter";

const Item = ({ item }) => {
  return (
    <div class="card-container">
      <div class="card-wrapper">
        <img src={item.imageUrl} alt={item.name} class="card-image" />
        <div class="card-details">
          <h3 class="card-title">{item.name}</h3>
          <p class="card-price">Precio: ${item.price}</p>
          <p class="card-restaurant">{item.restaurant}</p>
          <div class="button-wrapper"></div>
          <button class="detail-btn">Ver detalle</button>
        </div>
      </div>
    </div>
  );
};

export default Item;

//* <ItemCount stock={10} initial={1} onAdd={(count) => console.log("Cantidad agregada", count)}/> *//
