import React, { useState, useEffect } from 'react';

function WordChanger({ words, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return <span style={{color: 'red'}}>{words[currentIndex]}</span>;
}

export default WordChanger;