// src/components/pentakuhl/TempRanges.jsx
import { useState } from "react";

const TempRanges = () => {
  const [activeTab, setActiveTab] = useState("series4");

  const seriesData = {
    series4: {
      name: "SERIES 4",
      temp: "2°C - 8°C",
      usage: "Typically used for products that require refrigeration.",
      ideal: "Ideal for vaccines, insulin, biologics, and other temperature-sensitive pharmaceuticals."
    },
    series22: {
      name: "SERIES 22",
      temp: "15°C - 25°C",
      usage: "Covers a controlled room temperature range.",
      ideal: "Suitable for products that need to remain stable at standard room temperature, including certain medicines and cosmetics."
    },
    series20M: {
      name: "SERIES 20M",
      temp: "-20°C",
      usage: "Maintains sub-zero temperatures for more sensitive items.",
      ideal: "Ideal for frozen vaccines and biologics."
    },
    series50M: {
      name: "SERIES 50M",
      temp: "-50°C",
      usage: "Used for extreme cold chain products.",
      ideal: "Ideal for advanced biologics and special pharmaceuticals."
    }
  };

  const benefits = [
    "Tailored Freight Solutions",
    "Robust Load Security",
    "Expert Logistics Support",
    "End-to-End Supply Chain Management",
    "Flexible Shipping Schedules",
    "Volume Discounts"
  ];

  return (
    <section
      id="series-guide-section"
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Title */}
        <div style={{ marginBottom: "50px" }}>
          <span style={{ fontSize: "14px", fontWeight: "600", color: "#f97316", letterSpacing: "2px" }}>
            TEMPERATURE SPECIFICATIONS
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: "800",
              color: "#0f172a",
              margin: "10px 0 15px",
            }}
          >
            Series Guide
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#64748b",
              maxWidth: "800px",
              margin: 0,
            }}
          >
            This guide outlines temperature-controlled packaging solutions designed for the safe transport and storage of sensitive products, like vaccines and biologics, across various thermal conditions, from refrigerated to deep-freeze.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: "50px",
            alignItems: "start",
          }}
          className="series-guide-grid"
        >
          {/* Left Column: Interactive Tabs */}
          <div>
            {/* Tabs List */}
            <div
              style={{
                display: "flex",
                borderBottom: "2px solid #e2e8f0",
                gap: "10px",
                overflowX: "auto",
                paddingBottom: "2px",
                marginBottom: "35px",
              }}
            >
              {Object.keys(seriesData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  style={{
                    padding: "12px 24px",
                    background: "none",
                    border: "none",
                    borderBottom: activeTab === key ? "3px solid #f97316" : "3px solid transparent",
                    color: activeTab === key ? "#f97316" : "#64748b",
                    fontWeight: "700",
                    fontSize: "15px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease",
                  }}
                >
                  {seriesData[key].name}
                </button>
              ))}
            </div>

            {/* Tab Display Panel */}
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "16px",
                padding: "30px",
                border: "1px solid #f1f5f9",
                boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Temperature Range
                </span>
                <div style={{ fontSize: "28px", fontWeight: "800", color: "#f97316", marginTop: "5px" }}>
                  {seriesData[activeTab].temp}
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Usage & Applications
                </span>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#334155", margin: "5px 0 0" }}>
                  {seriesData[activeTab].usage}
                </p>
              </div>

              <div>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Ideal For
                </span>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#334155", margin: "5px 0 0" }}>
                  {seriesData[activeTab].ideal}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Benefits Checklist */}
          <div
            style={{
              background: "#0f172a", // Dark navy slate
              color: "#ffffff",
              borderRadius: "20px",
              padding: "40px 30px",
              boxShadow: "0 10px 30px rgba(15,23,42,0.15)",
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "25px", color: "#f8fafc" }}>
              Our Shipping Strengths
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {benefits.map((benefit, i) => (
                <div key={i} style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                  <div
                    style={{
                      background: "rgba(249, 115, 22, 0.2)",
                      borderRadius: "50%",
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#f97316",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span style={{ fontSize: "15px", fontWeight: "500", color: "#cbd5e1", lineHeight: "1.4" }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .series-guide-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default TempRanges;
