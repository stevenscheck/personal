import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ripples from "react-ripples";


function Welcome() {
  const navigate = useNavigate();
  const [rippling, setRippling] = useState(false);

  const handleEnterClick = (e) => {
    e.preventDefault();
    setRippling(true);
    setTimeout(() => {
      navigate("/home");
    }, 800);
  };

  return (
    <div className="welcomePage">
      <Ripples
        className="rippleContainer"
        color="rgba(255, 255, 255, 0.5)"
        during={1200}
      >
        <button
          className={`welcomeButton${rippling ? " hidden" : ""}`}
          onClick={handleEnterClick}
        >
          Enter
        </button>
      </Ripples>
    </div>
  );
}

export default Welcome;
