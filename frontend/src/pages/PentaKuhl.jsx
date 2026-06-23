// src/pages/PentaKuhl.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import KuhlHero from "../components/pentakuhl/KuhlHero";
import KuhlAbout from "../components/pentakuhl/KuhlAbout";
import Packaging from "../components/pentakuhl/Packaging";
import TempRanges from "../components/pentakuhl/TempRanges";
import Compliance from "../components/pentakuhl/Compliance";
import Footer from "../components/common/sections/Footer";

function PentaKuhl() {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <div style={{ width: "100%", background: "#ffffff", overflow: "hidden", minHeight: "100vh" }}>
      {/* Hero Banner Section */}
      <KuhlHero />

      {/* About Penta Kuhl Section */}
      <KuhlAbout />

      {/* Product Solutions Cards Grid Section */}
      <Packaging />

      {/* Series Guide Section */}
      <TempRanges />

      {/* FAQs Section */}
      <Compliance />

      {/* CTA Bottom Banner */}
      <section
        style={{
          width: "100%",
          padding: "100px 20px",
          backgroundImage: "url(/Home_page/pentakuhl_cta.png)",
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
            background: "rgba(15, 23, 42, 0.82)", // Slate slate dark overlay
            zIndex: 1
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "800",
              margin: "0 0 20px 0",
              lineHeight: "1.2",
              letterSpacing: "-0.5px"
            }}
          >
            Protecting What Matters Most
          </h2>
          
          <p
            style={{
              color: "#cbd5e1",
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: "1.7",
              margin: "0 0 40px 0",
              fontWeight: "400"
            }}
          >
            Get in touch to ensure safe and temperature-stable transit for your sensitive products.
          </p>

          <Link
            to="/contact"
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            style={{
              display: "inline-block",
              background: ctaHovered ? "#ea580c" : "#f97316",
              color: "#ffffff",
              padding: "16px 48px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: "700",
              letterSpacing: "0.5px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: ctaHovered 
                ? "0 10px 25px rgba(234, 88, 12, 0.4)" 
                : "0 8px 20px rgba(249, 115, 22, 0.2)"
            }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default PentaKuhl;