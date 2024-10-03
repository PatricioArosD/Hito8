import React, { useContext } from "react";
import { coso } from "../utils/coso";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
    const {
    carrito,
    vaciarCarrito,
    eliminarDelCarrito,
    incrementar,
    decrementar,
    total
  } = useContext(CartContext);

  const{token}=useContext(UserContext)
  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({ cart: carrito }),
      });
  
      const data = await response.json();
      console.log(carrito);
  
      if (data.message === "Checkout successful") {
        alert("Compra realizada con éxito");
        vaciarCarrito();
      } else {
        alert('Error en la compra');
      }
    } catch (error) {
      console.error("Error en la compra:", error);
      alert('Hubo un error al realizar la compra. Inténtalo de nuevo.');
    }
  };


  return (
    <div className="">
      <h2 className="text-center m-3">Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map((pizzas) => (
          <div key={pizzas.id} className="d-flex align-items-center gap-3 m-5 ">
            <img className="w-25 rounded-circle" src={pizzas.img} alt={pizzas.nombre} />
            <h2>{pizzas.name}</h2>
            <h5>${coso(pizzas.price)}</h5>
            <h5>Cantidad: {pizzas.cant}</h5>
            <button onClick={() => decrementar(pizzas)}> - </button>
            <button onClick={() => incrementar(pizzas)}> + </button>
            <button onClick={() => eliminarDelCarrito(pizzas.id)}>
              Eliminar
            </button>
            <p>Precio final: ${coso(pizzas.price * pizzas.cant)}</p>
          </div>
        ))
      )}
     <h1 className="text-center">Total:${total} {token ?(<button onClick={handleCheckout} >Pagar</button>):(<button disabled="disabled">Pagar</button>)}
      </h1>
    </div>
  );
};

export default Cart;
