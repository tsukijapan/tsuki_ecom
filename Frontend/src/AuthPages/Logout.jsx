import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);
}

export default Logout;
