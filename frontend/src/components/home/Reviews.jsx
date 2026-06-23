import { useState } from "react";

const reviewsData = [
  {
    quote: "Penta Freight has been our trusted partner for cold-chain pharmaceutical exports. Their temperature monitoring and zero-deviation transport are unmatched.",
    author: "Dr. Rajesh Mehta",
    role: "Director of Operations",
    company: "Sun Pharma",
    rating: 5,
    avatarColor: "#f97316"
  },
  {
    quote: "Excellent customer service and prompt custom clearance. Our over-dimensional cargo was handled with extreme care and precision.",
    author: "Sarah Jenkins",
    role: "Logistics Head",
    company: "Siemens Healthineers",
    rating: 5,
    avatarColor: "#0284c7"
  },
  {
    quote: "Their multimodal solutions saved us 20% in freight costs while meeting our strict deadline. Highly professional team.",
    author: "Vikram Oberoi",
    role: "VP Supply Chain",
    company: "Tata Motors",
    rating: 5,
    avatarColor: "#16a34a"
  }
];

const Reviews = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section 
      className="reviews-section" 
      style={{ 
        width: "100%", 
        background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)", 
        color: "#fff",
        padding: "80px 20px"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px",
              padding: "5px 16px",
              background: "rgba(255,255,255,0.05)"
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
              TESTIMONIALS
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "700",
              lineHeight: "1.2",
              margin: 0,
              letterSpacing: "-0.5px"
            }}
          >
            Trusted by Industry Leaders
          </h2>
          <p style={{ color: "#94a3b8", marginTop: "12px", fontSize: "16px", maxWidth: "600px", margin: "12px auto 0" }}>
            Read how we empower global supply chains with reliable, temperature-sensitive logistics.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="reviews-grid">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className={`review-card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
                padding: "35px 30px",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backdropFilter: "blur(12px)",
                transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                boxShadow: hoveredIndex === index 
                  ? "0 20px 40px -15px rgba(249, 115, 22, 0.15), 0 0 0 1px rgba(249, 115, 22, 0.2)" 
                  : "0 10px 30px -15px rgba(0,0,0,0.3)"
              }}
            >
              {/* Quote Mark */}
              <div 
                style={{ 
                  position: "absolute", 
                  top: "20px", 
                  right: "30px", 
                  fontSize: "64px", 
                  color: hoveredIndex === index ? "rgba(249, 115, 22, 0.15)" : "rgba(255,255,255,0.03)",
                  fontFamily: "Georgia, serif",
                  lineHeight: "1",
                  userSelect: "none",
                  transition: "color 0.4s ease"
                }}
              >
                “
              </div>

              {/* Stars Rating */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} style={{ color: "#f59e0b", fontSize: "18px" }}>★</span>
                ))}
              </div>

              {/* Quote Text */}
              <p 
                style={{ 
                  fontSize: "15px", 
                  lineHeight: "1.7", 
                  color: "#cbd5e1", 
                  margin: "0 0 25px", 
                  fontStyle: "italic",
                  zIndex: 2 
                }}
              >
                "{review.quote}"
              </p>

              {/* Author Footer */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div 
                  style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "50%", 
                    background: review.avatarColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#fff",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                  }}
                >
                  {review.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "600", color: "#fff" }}>
                    {review.author}
                  </h4>
                  <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
                    {review.role}, <span style={{ color: "#f97316", fontWeight: "500" }}>{review.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .reviews-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }

          @media (max-width: 1024px) {
            .reviews-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .reviews-grid {
              grid-template-columns: 1fr;
              gap: 20px;
              padding: 0 10px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Reviews;
