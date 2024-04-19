const Item = ({ key, item, precio }) => {
  return (
    <div className="item">
      <h3>{item}</h3>
      <p>Precio: ${precio}</p>
    </div>
  );
};

export default Item;
