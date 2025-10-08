import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state === undefined) {
      navigate("/");
    }
  }, [location, navigate]);

  return <span>{location.state?.title}</span>;
}

export default Detail;
