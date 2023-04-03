import { color } from "@mui/system";
import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, delay, onTypingFinished, smallText }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedText(text.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        onTypingFinished && onTypingFinished();
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  const firstText = {
    color: 'white',
    fontSize: '2rem',
    fontFamily: '"JetBrains Mono",monospace',
    textAlign: 'center'
  }

  const secondText = {
    color: 'white',
    fontSize: '1rem',
    fontFamily: '"JetBrains Mono",monospace',
    textAlign: 'center'
  }

  return(
  <div style={smallText ? secondText : firstText}>{typedText}</div>
  )
};

export default TypingEffect
