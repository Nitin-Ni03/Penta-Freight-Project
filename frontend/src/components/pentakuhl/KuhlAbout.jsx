// src/components/pentakuhl/KuhlAbout.jsx
import { useState } from "react";

const KuhlAbout = () => {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div id="about-pentakuhl" style={{ width: "100%", background: "#ffffff" }}>
      {/* Intro Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left Column: Heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ fontSize: "14px", fontWeight: "600", color: "#f97316", letterSpacing: "2px" }}>
            OVERVIEW
          </span>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: "700",
              color: "#0f172a",
              lineHeight: "1.2",
              margin: 0,
              position: "relative",
              paddingBottom: "15px",
            }}
          >
            ABOUT PENTA KUHL
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "60px",
                height: "4px",
                background: "#f97316",
                borderRadius: "2px",
              }}
            />
          </h2>
        </div>

        {/* Right Column: Paragraph */}
        <div>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#475569",
              margin: 0,
              fontWeight: "400",
            }}
          >
            At <strong style={{ color: "#0f172a" }}>Pentakuhl</strong>, we specialize in providing durable, effective packaging solutions that maintain temperature stability during transit, protecting your valuable products. Our innovative designs cater to various industries, including pharmaceuticals, food, and biotechnology.
          </p>
        </div>
      </section>

      {/* Partner Section */}
      <section
        style={{
          width: "100%",
          background: "#1e293b", // Dark Slate Blue
          padding: "60px 24px",
          textAlign: "center",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* Logo Card */}
        <div
          style={{
            background: "#ffffff",
            padding: "24px 40px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            maxWidth: "280px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/Home_page/peli_logo_vertical.png"
            alt="Pelican BioThermal Logo"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Heading */}
        <h3
          style={{
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: "600",
            margin: "10px 0 5px",
            color: "#f8fafc",
            letterSpacing: "0.5px",
          }}
        >
          Authorized Distributors for Pelican BioThermal™ Products
        </h3>

        {/* Action Button */}
        <a
          href="https://www.pelibiothermal.com/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            display: "inline-block",
            background: btnHovered ? "#ea580c" : "#f97316",
            color: "#ffffff",
            padding: "12px 36px",
            borderRadius: "999px",
            fontSize: "15px",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: btnHovered 
              ? "0 10px 20px rgba(234, 88, 12, 0.3)" 
              : "0 4px 12px rgba(249, 115, 22, 0.2)",
            transition: "all 0.3s ease",
          }}
        >
          Read more
        </a>
      </section>
    </div>
  );
};

export default KuhlAbout;
