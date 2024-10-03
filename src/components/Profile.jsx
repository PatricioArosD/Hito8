import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Profile = () => {
  const { validar, user, logout} = useContext(UserContext);

  useEffect(() => {
    validar();
  }, [validar]);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="https://i.pinimg.com/236x/bd/1c/c7/bd1cc751865c67de695216da045579d5.jpg"
        alt=""
        style={{ borderRadius: "75%", margin:"20px" }}
      />

      <h3>Email: {user}</h3>
      <button className="btn btn-dark m-1"
        onClick={logout}><FontAwesomeIcon icon={faUnlock}  /> Logout</button>
    </div>
  );
};
export default Profile;
