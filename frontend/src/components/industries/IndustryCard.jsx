import { useState } from "react";

const IndustryCard = ({ icon, title, description, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="industry-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "#f1946a",
        border: "1px solid #e2e8f0",
        borderRadius: "24px",
        padding: "40px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? (isHovered ? "translateY(-8px)" : "translateY(0)") 
          : "translateY(30px)",
        boxShadow: isHovered 
          ? "0 20px 40px -10px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(249, 115, 22, 0.15)" 
          : "0 4px 20px -2px rgba(0, 0, 0, 0.02)",
        transition: `
          opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms,
          transform ${isHovered ? "0.3s cubic-bezier(0.16, 1, 0.3, 1)" : `0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`},
          border-color 0.3s ease,
          box-shadow 0.3s ease
        `
      }}
    >
      {/* Icon Wrapper */}
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "20px",
          background: isHovered ? "#ff9100" : "#f19407",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
          transition: "all 0.3s ease"
        }}
      >
        <img
          src={icon}
          alt={title}
          style={{
            width: "36px",
            height: "36px",
            objectFit: "contain",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s ease"
          }}
        />
      </div>

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "700",
            color: "white"
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "14.5px",
            color: "white",
            lineHeight: "1.7",
            fontWeight: "400"
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default IndustryCard;
