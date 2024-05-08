import { useEffect, useState } from "react";

const ItemsDetailsContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(1)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="ItemDetaailContainer">
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemsDetailsContainer;
