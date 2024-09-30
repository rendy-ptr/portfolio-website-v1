import React, { useState, useEffect } from 'react';
import TypingAnimation from "../../../@/components/magicui/typing-animation";

const TypingText = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const roles = ["Frontend Developer", "Backend Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const text = `I am a\n${roles[currentTextIndex]}`;

  return (
    <TypingAnimation
      className="text-4xl font-bold"
      duration={100}
      text={text}
    />
  );
};

export default TypingText;