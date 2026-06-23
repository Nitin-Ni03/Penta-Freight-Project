import { useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);


  const scrollToNext = () => {
    const el = document.getElementById("section-2");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/Home_page/Video/hero.mp4" type="video/mp4" />
      </video>

      <img
        src="/Home_page/down-arrow.png"
        alt="Scroll Down"
        onClick={scrollToNext}
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%, 10%)",
          width: "clamp(90px, 15vw, 220px)",
          height: "auto",
          objectFit: "contain",
          zIndex: 5,
          cursor: "pointer",
        }}
      />

      <style>
        {`
    @media (max-width: 768px) {
      .hero-section {
        height: 70vh !important;
      }

      .volume-btn {
        left: 50% !important;
        right: auto !important;
        transform: translateX(-50%) !important;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        height: 40vh !important;
      }

      .volume-btn {
        left: 50% !important;
        right: auto !important;
        transform: translateX(-50%) !important;
      }
    }
  `}
      </style>
    </section>
  );
};

export default Hero;
