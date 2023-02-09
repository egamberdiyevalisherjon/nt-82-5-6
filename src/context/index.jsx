import { createContext, useState } from "react";

export const cartContext = createContext();

function Provider(props) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  function addToCart(product) {
    setItems([...items, { count: 1, product }]);
  }

  function incItemCount(id) {
    setItems(
      items.map((i) => (i.product.id === id ? { ...i, count: i.count + 1 } : i))
    );
  }

  function decItemCount(id) {
    setItems(
      items.map((i) => (i.product.id === id ? { ...i, count: i.count - 1 } : i))
    );
  }

  return (
    <cartContext.Provider
      value={{
        items,
        total,
        addToCart,
        incItemCount,
        decItemCount,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default Provider;
