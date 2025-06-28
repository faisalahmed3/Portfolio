import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-[#ff7b72] via-[#4b0c27] to-[#1a0c10] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 z-50"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
