import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      <h2>Lista de productos</h2>
      {items.map((item) => (
        <Item key={item.id} item={item.nombre} />
      ))}
    </div>
  );
};

export default ItemList;
