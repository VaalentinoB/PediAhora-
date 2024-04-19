const Item = ({ item }) => {
  return (
    <div className="item-container">
      <h3>{item.name}</h3>
      <p>Precio: {item.price}</p>
    </div>
  );
};

export default Item;
