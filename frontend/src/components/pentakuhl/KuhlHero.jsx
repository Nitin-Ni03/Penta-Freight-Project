// src/components/pentakuhl/KuhlHero.jsx
import { useState } from "react";

const KuhlHero = () => {
  const [hovered, setHovered] = useState(false);

  const handleScroll = () => {
    const nextSection = document.getElementById("about-pentakuhl");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "80vh",
        backgroundImage: "url(/Home_page/pentakuhl_hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      {/* Dark overlay for contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15, 23, 42, 0.65)",
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 54px)",
            fontWeight: "800",
            lineHeight: "1.2",
            margin: "0 0 20px 0",
            letterSpacing: "-0.5px",
          }}
        >
          Ensuring Safe Transport for <br />
          <span style={{ color: "#f97316" }}>Temperature-Sensitive</span> Products
        </h1>
        
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            lineHeight: "1.6",
            color: "#cbd5e1",
            margin: "0 auto 35px",
            maxWidth: "700px",
            fontWeight: "400",
          }}
        >
          Explore our frequently asked questions to gain clarity about Penta Kuhl’s services and features
        </p>

        <button
          onClick={handleScroll}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: hovered ? "#ea580c" : "#f97316",
            color: "#ffffff",
            padding: "14px 36px",
            borderRadius: "999px",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            boxShadow: hovered 
              ? "0 10px 25px rgba(249, 115, 22, 0.4)" 
              : "0 8px 20px rgba(249, 115, 22, 0.2)",
            transition: "all 0.3s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Explore
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              transform: hovered ? "translateY(3px)" : "translateY(0)",
              transition: "transform 0.2s ease"
            }}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default KuhlHero;
