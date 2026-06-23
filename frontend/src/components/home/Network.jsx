import { section5Data } from "../../data/data";

const Network = () => {
  const logos = [
    ...section5Data.certifications,
    ...section5Data.certifications,
  ];

  return (
    <section
      className="network-certifications-section"
      style={{
        width: "100%",
        minHeight: "520px",
        padding: "80px 0",
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${section5Data.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(60,78,95,0.88)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "90%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              color: "#ff6b2d",
              fontSize: "clamp(28px,4vw,56px)",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            {section5Data.title}
          </h2>

          <p
            style={{
              color: "#fff",
              fontSize: "clamp(14px,2vw,18px)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            {section5Data.subtitle}
          </p>
        </div>

        <div style={{ width: "100%", overflow: "hidden" }}>
          <div
            className="certification-track"
            style={{
              display: "flex",
              width: "max-content",
              gap: "18px",
            }}
          >
            {logos.map((item, index) => (
              <div
                key={index}
                style={{
                  flex: "0 0 auto",
                  width: "260px",
                  height: "290px",
                  background: "#f4f4f4",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "30px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .certification-track{
            animation: certScroll 25s linear infinite;
            will-change: transform;
          }

          @keyframes certScroll{
            from{
              transform: translateX(0);
            }
            to{
              transform: translateX(-50%);
            }
          }

          @media (max-width: 1024px){
            .certification-track > div{
              width: 220px !important;
              height: 250px !important;
            }
          }

          @media (max-width: 768px){
            .certification-track{
              gap: 12px;
            }

            .certification-track > div{
              width: 200px !important;
              height: 230px !important;
              padding: 20px !important;
            }
          }

          @media (max-width: 480px){
            .certification-track > div{
              width: 160px !important;
              height: 200px !important;
              padding: 16px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Network;
