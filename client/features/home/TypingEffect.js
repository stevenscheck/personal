import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, delay, onTypingFinished, smallText }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypedText(text.slice(0, currentIndex));
      setCurrentIndex(currentIndex + 1);
      if (currentIndex > text.length) {
        onTypingFinished && onTypingFinished();
        clearInterval(intervalId);
        setTypingDone(true)
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay, currentIndex, onTypingFinished]);


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
    <div className={typingDone ? '' : 'textTyping'} style={smallText ? secondText : firstText}>{typedText}</div>
  )
};

export default TypingEffect;
