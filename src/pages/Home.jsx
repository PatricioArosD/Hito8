import React, { useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { ApiContext } from '../context/ApiContext'

const Home = () => {
  const {pizzas} = useContext(ApiContext)

  return (
    <>
      <Header />
      <article className="row">  
      {pizzas.map((pizzas,index)=>(
            <div className='col-md-4 col-sm-12 mt-4' key={pizzas.id} >
                <CardPizza pizza={pizzas} />
            </div>
        ))}
      </article>
       
    </>
  );
};

export default Home;
