// src/components/pentakuhl/Compliance.jsx
import { useState } from "react";

const Compliance = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const faqs = [
    {
      q: "What is Penta Kuhl?",
      a: "Penta Kuhl is an innovative logistics solution that integrates technology to optimize supply chain management and enhance efficiency."
    },
    {
      q: "How does Penta Kuhl ensure cargo safety?",
      a: "We utilize advanced tracking systems, secure storage facilities, and stringent handling protocols to ensure the safety of your cargo."
    },
    {
      q: "What types of cargo can Penta Kuhl handle?",
      a: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, and general freight."
    },
    {
      q: "Is there customer support available for Penta Kuhl users?",
      a: "Yes, our dedicated customer support team is available to assist you with any inquiries or issues regarding our services."
    }
  ];

  const handleToggle = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <section
      style={{
        width: "100%",
        background: "#f8fafc",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "50px",
            alignItems: "start",
          }}
          className="faq-grid"
        >
          {/* Left Column: Heading and Subtitle */}
          <div>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#f97316", letterSpacing: "2px" }}>
              QUESTIONS & ANSWERS
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: "800",
                color: "#0f172a",
                margin: "10px 0 20px",
                lineHeight: "1.2",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#64748b",
                margin: 0,
              }}
            >
              Explore our frequently asked questions to gain clarity about Penta Kuhl’s services and features.
            </p>
          </div>

          {/* Right Column: Accordion Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                    overflow: "hidden",
                    boxShadow: isOpen ? "0 10px 20px rgba(15, 23, 42, 0.04)" : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Header/Question */}
                  <button
                    onClick={() => handleToggle(idx)}
                    style={{
                      width: "100%",
                      padding: "24px",
                      background: "none",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: isOpen ? "#f97316" : "#0f172a",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {faq.q}
                    </span>
                    
                    {/* Icon */}
                    <div
                      style={{
                        background: isOpen ? "#f97316" : "#f1f5f9",
                        color: isOpen ? "#ffffff" : "#64748b",
                        borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "all 0.3s ease",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </button>

                  {/* Body/Answer Panel */}
                  <div
                    style={{
                      maxHeight: isOpen ? "200px" : "0",
                      opacity: isOpen ? "1" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0, 1, 0, 1)",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        padding: "0 24px 24px",
                        fontSize: "15px",
                        lineHeight: "1.7",
                        color: "#475569",
                        borderTop: "1px solid #f1f5f9",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .faq-grid {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Compliance;
