import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/common/sections/Footer";
import IndustryGrid from "../components/industries/IndustryGrid";
import SectorInfo from "../components/industries/SectorInfo";

function Industries() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div style={{ width: "100%", background: "#ffffff", overflow: "hidden" }}>
      
      {/* Hero Banner Section */}
      <section
        className="industries-hero"
        style={{
          width: "100%",
          padding: "120px 20px 80px",
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          backgroundImage: "url(/Home_page/lineas-CSz1CbRe.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          textAlign: "center",
          color: "#ffffff"
        }}
      >
        {/* Background Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(15, 23, 42, 0.88)",
            zIndex: 1
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
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
            <span style={{ fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "600", color: "#f97316" }}>
              Sectors
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: "800",
              lineHeight: "1.15",
              margin: "0 0 20px 0",
              letterSpacing: "-1px"
            }}
          >
            Industries We Serve
          </h1>
          
          <p
            style={{
              color: "#cbd5e1",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: "1.7",
              margin: 0,
              fontWeight: "400"
            }}
          >
            Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
          </p>
        </div>
      </section>

      {/* Modular Card Grid */}
      <IndustryGrid />

      {/* Modular FAQ Section */}
      <SectorInfo />

      {/* CTA Bottom Banner */}
      <section
        style={{
          width: "100%",
          padding: "80px 20px",
          background: "#3c4e5f",
          backgroundImage: "url(/Home_page/lineas-CSz1CbRe.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          textAlign: "center",
          color: "#ffffff"
        }}
      >
        {/* Background Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(60, 78, 95, 0.92)",
            zIndex: 1
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "650px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 36px)",
              fontWeight: "700",
              margin: "0 0 16px 0",
              lineHeight: "1.2"
            }}
          >
            Tailored Logistics for Every Industry
          </h2>
          <p
            style={{
              color: "#cbd5e1",
              fontSize: "16px",
              lineHeight: "1.7",
              margin: "0 0 35px 0",
              fontWeight: "400"
            }}
          >
            Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.
          </p>

          <Link
            to="/contact"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: "inline-block",
              background: btnHovered ? "#ea580c" : "#f97316",
              color: "#ffffff",
              padding: "16px 40px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: "600",
              letterSpacing: "0.5px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: btnHovered 
                ? "0 10px 25px rgba(234, 88, 12, 0.3)" 
                : "0 8px 20px rgba(249, 115, 22, 0.2)"
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

    </div>
  );
}

export default Industries;