import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DefaultRedirect() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/planets/mercury");
  }, [navigate]);

  return null;
}

export default DefaultRedirect;
