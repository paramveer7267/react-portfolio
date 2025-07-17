// components/Typewriter.tsx
import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number; // ms per character
  deletingSpeed?: number; // ms per character when deleting
  pauseTime?: number; // ms to wait at end before deleting/typing
}

export default function Typewriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseTime = 1500,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // typing
      timer = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
        // once done typing, pause then start deleting
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    } else {
      // deleting
      timer = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
        // once done deleting, move to next word
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((idx) => idx + 1);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className="pr-1 h-25 text-3xl flex mx-auto font-mono items-center">
      <span className="mr-1 font-medium">{text}</span>
      <span  className="animate-blink font-semibold text-3xl leading-none align-top -translate-y-1">
        |
      </span>
    </span>
  );
}
