import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Підписка на подію прокрутки сторінки
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      // Відписка від події при видаленні компонента
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Функція, яка визначає, чи потрібно відображати стрілку
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Функція, яка прокручує сторінку вгору при кліці на стрілку
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#9650;
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
