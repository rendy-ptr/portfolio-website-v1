import { useEffect, useState } from 'react';

const CustomTypingText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Frontend Developer", "Backend Developer"];
  const staticText = "I am a ";

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        setText((prevText) => fullText.substring(0, prevText.length - 1));
        setTypingSpeed(30);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative h-8"> {/* Increased height */}
      <p className="text-4xl font-semibold absolute whitespace-nowrap text-[#CEC8B6]">
        {staticText}
        <span className="font-bold">{text}</span>
        <span className="animate-blink">|</span>
      </p>
    </div>
  );
};

export default CustomTypingText;