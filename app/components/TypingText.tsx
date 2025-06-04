"use client"
import React, { useState, useEffect, useMemo } from 'react';

const TypingText: React.FC = () => {
  const words = useMemo(() => ['opportunities', 'collaborations', 'ideas'], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 80; // Typing speed in ms
  const deletingSpeed = 30; // Deleting speed in ms
  const delay = 2500; // Delay after typing a word
  const startTypingDelay = 500; // Delay before starting a new word in ms

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const updateText = () => {
      const fullText = words[currentWordIndex];
      
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === fullText) {
        timeout = setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);

        // Set a delay before starting the next word
        timeout = setTimeout(updateText, startTypingDelay);
      } else {
        timeout = setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    // Start typing after the delay when starting a new word
    if (!displayedText && !isDeleting) {
      timeout = setTimeout(updateText, startTypingDelay);
    } else {
      timeout = setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  // Format the index as "01", "02", etc.
  const formattedIndex = String(currentWordIndex + 1).padStart(2, '0');

  return (
    <div className="typing-text">
      <p className="fs-h1">Let’s discuss new</p>
      <p className="fs-h1 flex">
        <span className='fs-h5 mr-2'>{formattedIndex}</span>
        <span>{displayedText}</span>
        <span className="blinking-underscore">_</span>
      </p>
      <p className="fs-h1">you may have.</p>
      
      <style jsx>{`
        .blinking-underscore {
          animation: blink 1s steps(2, start) infinite;
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          50.01%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TypingText;
