import { useState } from "react";

const awardsData = [
  {
    logo: "/Home_page/emirates.png",
    alt: "Emirates SkyCargo",
    details: ["Top Cargo Agents, 2016/17", "Top Cargo Agents, 2005/06"]
  },
  {
    logo: "/Home_page/delta-airlines.png",
    alt: "Delta Air Lines",
    details: ["Top Revenue Performance, 2002"]
  },
  {
    logo: "/Home_page/maskargo.png",
    alt: "mas kargo",
    details: ["Mega Tonners, 2006/07"]
  },
  {
    logo: "/Home_page/cancor.png",
    alt: "CONCOR",
    details: ["CONCOR Exim Star, 2003/04"]
  },
  {
    logo: "/Home_page/airfrance.png",
    alt: "Air France",
    details: ["Meritorious Performance, 1999/2000"]
  },
  {
    logo: "/Home_page/finnair.png",
    alt: "Finnair Cargo",
    details: ["Top Performance, 2008", "Top Performance, 2007"]
  },
  {
    logo: "/Home_page/iamcargo.png",
    alt: "IAM Cargo",
    details: ["Significant Support and Contribution, 2007"]
  },
  {
    logo: "/Home_page/star.png",
    alt: "The Star Trade Times",
    details: ["International Award for Excellence in Air Cargo, Region India - Winner, 2018"]
  },
  {
    logo: "/Home_page/turkishCargo.png",
    alt: "Turkish Cargo",
    details: ["Best Performance, 2017, Excellence Revenue Performance, 2016, Best Performance, 2014, Cargo Agency, 2013, Cargo Agency, 2011"]
  },
  {
    logo: "/Home_page/qatar.png",
    alt: "Qatar Cargo",
    details: ["Significant Support and Contribution, 2007"], 
  },
  {
    logo: "/Home_page/singaporeaAirlines.png",
    alt: "Singapore Airlines",
    details: ["Top Performance Cargo, 2009/10"]
  },
  {
    logo: "/Home_page/swisswordcargo.png",
    alt: "Swiss WorldCargo",
    details: ["Top Revenue Performance, 2005"]
  }
];

const Awards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section 
      className="awards-section" 
      style={{ 
        width: "100%", 
        background: "#ffffff", 
        color: "#1e293b",
        padding: "100px 20px",
        borderTop: "1px solid #f1f5f9"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "left", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
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
              Awards
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "700",
              lineHeight: "1.2",
              margin: 0,
              color: "#0f172a",
              letterSpacing: "-0.5px"
            }}
          >
            Proudly Recognized with Prestigious
            <br />
            <span style={{ color: "#94a3b8", fontWeight: "400" }}>Awards and Accolades.</span>
          </h2>
        </div>

        {/* Awards Cards Grid */}
        <div className="awards-grid">
          {awardsData.map((award, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: "#ffffff",
                border: "1px solid #f1f5f9",
                borderRadius: "24px",
                padding: "35px 30px",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                transform: hoveredIndex === index ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hoveredIndex === index 
                  ? "0 20px 40px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(249, 115, 22, 0.08)" 
                  : "0 4px 20px -2px rgba(0, 0, 0, 0.02)"
              }}
            >
              {/* Logo Area */}
              <div 
                style={{ 
                  height: "80px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "flex-start" 
                }}
              >
                <img 
                  src={award.logo} 
                  alt={award.alt}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "85%",
                    objectFit: "contain"
                  }}
                />
              </div>

              {/* Award Details Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {award.details.map((detail, idx) => (
                  <p 
                    key={idx} 
                    style={{ 
                      margin: 0, 
                      fontSize: "13.5px", 
                      color: "#475569", 
                      lineHeight: "1.5",
                      fontWeight: "400"
                    }}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .awards-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
          }

          @media (max-width: 1024px) {
            .awards-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 25px;
            }
          }

          @media (max-width: 768px) {
            .awards-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
          }

          @media (max-width: 480px) {
            .awards-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Awards;
