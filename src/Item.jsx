const Item = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.nombre}</h3>
      <p>Precio: {item.precio}</p>
    </div>
  );
};

export default Item;
