import React, { useContext, useEffect, useState } from "react";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
  const {
    carrito,
    agregarAlCarrito,
  } = useContext(CartContext);
  const {id}= useParams()
  const [pizza, setPizza] = useState([]);
  const urlid = `http://localhost:5000/api/pizzas/${id}`;
  const getData = async () => {
    const response = await fetch(urlid);
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(getData);

  return (
    <div className="card d-flex" style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px', width:"600px", marginLeft:"30vw", marginRight:"30vw", marginTop:"5vh"
  }}>
      <img
        src={pizza.img}
        className="card-img-top rounded-pill"
        style={{
          width: '300px'
      }}
      />
      <div className="card-body">
        <h5 className="card-title fw-light mb-3 fs-2">Pizza {pizza.name}</h5>
        <hr />
        <p className="card-text h6 fw-light text-center fs-3">Ingredientes: </p>
        <p className="fw-light fs-5">
          <ul>
            {pizza.ingredients?.map((ingredient, index) => (
              <li key={index}>
                {ingredient} <FontAwesomeIcon icon={faPizzaSlice} />
              </li>
            ))}
          </ul>
          <hr />
          <h5>Descripción: <br />{pizza.desc} </h5>
        </p>
        <hr />
        <p className="h2 fw-bold green text-center">Total:${pizza.price}</p>
      </div>
      <div className="butonCard">
        <button type="button" className="btn btn-dark border border-light" onClick={() => agregarAlCarrito(pizza)}>
          Añadir <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
    </div>
  );
};

export default Pizza;
