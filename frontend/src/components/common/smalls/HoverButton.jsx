import { useState } from "react";

const HoverButton = ({
  text = "Read More",
  hoverText = "Let's Go",
}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "170px",
        height: "55px",
        border: "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        borderRadius: "6px",
        background: "#f97316",
      }}
    >

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#5f6b76",
          transform: hover
            ? "translateY(0)"
            : "translateY(100%)",
          transition: "transform 0.4s ease",
        }}
      />

      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          color: "#fff",
          fontSize: "16px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          zIndex: 2,
          transform: hover
            ? "translate(-50%, -250%)"
            : "translate(-50%, -50%)",
          transition: "all 0.4s ease",
        }}
      >
        {text}
      </span>

      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          color: "#fff",
          fontSize: "16px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          zIndex: 2,
          transform: hover
            ? "translate(-50%, -50%)"
            : "translate(-50%, 250%)",
          transition: "all 0.4s ease",
        }}
      >
        {hoverText}
      </span>
    </button>
  );
};

export default HoverButton;
