import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const validarToken = localStorage.getItem("token") || null;
const UserProvider = ({ children }) => {
  const [token, setToken] = useState(validarToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    alert(data?.error || "Autentificación Completa!");
    localStorage.setItem("token", data.token);
    setToken(data.token || null);
    setEmail(data.email);
  };

  const handleSubmitR = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Registro exitoso!"); 
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Algo salió mal, intentelo de nuevo."}`);
      }
    } catch (error) {
      alert(
        "Error al enviar los datos al servidor. Inténtelo de nuevo más tarde."
      );
      console.error("Error en el registro:", error);
    }
  };

  const validar = async () => {
    const response = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    setUser(data.email);
    return data;
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        logout,
        validar,
        setEmail,
        user,
        setPassword,
        handleSubmit,
        handleSubmitR,
        email,
        password,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
