import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Register = () => {
  
  const{handleSubmitR, setEmail, setPassword, email, password}=useContext(UserContext)

  return (
    <form
      onSubmit={handleSubmitR}
      style={{
        backgroundColor: "#f0f4f8", 
        borderRadius: "10px", 
        padding: "40px", 
        width: "350px", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
        margin: "100px auto", 
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "24px", color: "#333" }}>
        Register
      </h1>

      <label style={{ marginBottom: "10px", color: "#555", width: "100%" }}>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
      
      <label style={{ marginBottom: "10px", color: "#555", width: "100%" }}>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
    
      <button
        type="submit"
        style={{
          padding: "12px 20px",
          backgroundColor: "#007bff", 
          color: "#fff", 
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Submit
      </button>
    </form>
  );
};

export default Register;
