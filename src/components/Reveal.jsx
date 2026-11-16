import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, className = "", direction = "left" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hidden = direction === "right" ? "translate-x-8" : "-translate-x-8";

  return (
    <div
      ref={ref}
      className={`reveal-item transition-all duration-700 ease-out ${
        visible ? "translate-x-0 opacity-100" : `${hidden} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
