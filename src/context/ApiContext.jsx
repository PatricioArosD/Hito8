import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const url = "http://localhost:5000/api/pizzas";
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiContext.Provider value={{ pizzas, url }}>{children}</ApiContext.Provider>
  );
};
export default ApiProvider;