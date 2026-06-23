import { useState } from "react";

const faqData = [
  {
    question: "What industries do you serve?",
    answer: "We serve a wide variety of sectors including Pharmaceuticals, Automotive, Chemicals, Electronics, Energy, Glassware, Packaging, Textiles, and Time-Critical cargo forwarding, offering dedicated solutions for each."
  },
  {
    question: "How do you handle temperature-sensitive shipments?",
    answer: "We provide temperature-controlled solutions to ensure the safe transport ofsensitive goods, especially for the pharmaceutical industry."
  },
  {
    question: "What sets your logistics and freight solutions apart?",
    answer: "We offer customized, transparent solutions with competitive rates and a deepunderstanding of industry-specific needs."
  },
  {
    question: "How do you ensure strict regulatory compliance?",
    answer: "We comply with international guidelines, working closely with authorities toensure smooth and legal shipments."
  }
];

const SectorInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      className="faq-section" 
      style={{ 
        width: "100%", 
        padding: "100px 20px", 
        background: "#ffffff",
        borderTop: "1px solid #f1f5f9"
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
              border: "1px solid #e2e8f0",
              borderRadius: "999px",
              padding: "5px 16px",
              background: "#f8fafc"
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#f97316",
              }}
            />
            <span style={{ fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "600", color: "#f97316" }}>
              FAQ
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: "700",
              lineHeight: "1.2",
              margin: 0,
              color: "#0f172a",
              letterSpacing: "-0.5px"
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "18px",
                  background: isOpen ? "#fafafa" : "#ffffff",
                  transition: "all 0.3s ease",
                  overflow: "hidden"
                }}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 28px",
                    background: "none",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#0f172a"
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "1.4",
                      transition: "color 0.2s ease",
                      color: isOpen ? "#f97316" : "#0f172a"
                    }}
                  >
                    {item.question}
                  </span>
                  
                  {/* Chevron Icon */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: isOpen ? "#f97316" : "#f1f5f9",
                      color: isOpen ? "#ffffff" : "#475569",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      transition: "all 0.3s ease",
                      fontSize: "14px",
                      fontWeight: "bold"
                    }}
                  >
                    ↓
                  </span>
                </button>

                {/* Answer Collapsible Wrapper (Grid transition trick) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    padding: isOpen ? "0 28px 22px" : "0 28px 0",
                    visibility: isOpen ? "visible" : "hidden",
                    opacity: isOpen ? 1 : 0,
                    transitionProperty: "grid-template-rows, padding, opacity"
                  }}
                >
                  <div style={{ minHeight: 0 }}>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "15px",
                        color: "#475569",
                        lineHeight: "1.7",
                        fontWeight: "400"
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SectorInfo;
