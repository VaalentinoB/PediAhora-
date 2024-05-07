import "./ItemList";

const Item = ({ item }) => {
  return (
    <div class="container">
      <div class="wrapper">
        <img src={item.imageUrl} alt="item.name" className="banner-image" />
        <div className="item-details">
          <h3 className="item-name">{item.name}</h3>
          <p className="item-price">Precio: ${item.price}</p>
          <div class="button-wrapper">
            <button class="btn outline">DETAILS</button>
            <button class="btn fill">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
