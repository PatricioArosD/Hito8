import { createContext, useEffect, useState } from "react";
import { coso } from "../utils/coso";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarAlCarrito = (producto) => {
    const ProductoEnCarrito = carrito.find((item) => item.id === producto.id);
    if (ProductoEnCarrito) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cant: item.cant + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cant: 1 }]);
    }
  };
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const incrementar = (producto) => {
    setCarrito(
      carrito.map((item) =>
        item.id === producto.id ? { ...item, cant: item.cant + 1 } : item
      )
    );
  };

  const decrementar = (producto) => {
    if (producto.cant === 1) {
      eliminarDelCarrito(producto.id);
    } else {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cant: item.cant - 1 } : item
        )
      );
    }
  };
  useEffect(() => {
    const nuevoTotal = coso(carrito.reduce(
      (acc, item) => acc + item.cant * item.price,
      0
    ));
    setTotal(nuevoTotal);
  }, [carrito]);
  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        incrementar,
        decrementar,
        total,
        vaciarCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
