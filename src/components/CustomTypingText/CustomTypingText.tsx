import { useEffect, useState } from 'react';
import { CUSTOM_TYPING } from '../../constant/index';

const CustomTypingText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % CUSTOM_TYPING.ROLES.length;
      const fullText = CUSTOM_TYPING.ROLES[i];

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
    <div className="relative h-8">
      {" "}
      {/* Increased height */}
      <p className="text-4xl font-semibold absolute whitespace-nowrap text-[#CEC8B6]">
        {CUSTOM_TYPING.TEXT}
        <span className="font-bold">{text}</span>
        <span className="animate-blink">|</span>
      </p>
    </div>
  );
};

export default CustomTypingText;