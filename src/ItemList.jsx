import Item from "./Item";

const ItemList = () => {
  return (
    <div className="itemlist-container">
      <h2>Lista de productos</h2>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
