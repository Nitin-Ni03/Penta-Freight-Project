import { footerData } from "../../../data/data";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        background: "#f7f7f7",
        padding: "80px 20px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "50px",
            marginBottom: "80px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(28px,3.5vw,42px)",
                fontWeight: "700",
                marginBottom: "20px",
                lineHeight: "1.2",
                color: "#111",
              }}
            >
              {footerData.indiaIntro.title}{" "}
              <span style={{ color: "#f97316" }}>
                {footerData.indiaIntro.highlight}
              </span>{" "}
              {footerData.indiaIntro.suffix}
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "16px",
                lineHeight: "1.8",
              }}
            >
              {footerData.indiaIntro.description}
            </p>
          </div>

          {footerData.indiaOffices.map((office) => (
            <div key={office.city}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#111",
                }}
              >
                {office.city}
              </h3>

              <div
                style={{
                  color: "#444",
                  lineHeight: "2",
                  fontSize: "15px",
                }}
              >
                {office.address.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}

                <div
                  style={{
                    marginTop: "10px",
                    color: "#111",
                    fontWeight: "500",
                  }}
                >
                  {office.phone}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "50px",
            marginBottom: "80px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(28px,3.5vw,42px)",
                fontWeight: "700",
                marginBottom: "20px",
                lineHeight: "1.2",
                color: "#111",
              }}
            >
              {footerData.usaIntro.title}{" "}
              <span style={{ color: "#f97316" }}>
                {footerData.usaIntro.highlight}
              </span>{" "}
              {footerData.usaIntro.suffix}
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "16px",
                lineHeight: "1.8",
              }}
            >
              {footerData.usaIntro.description}
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#111",
              }}
            >
              {footerData.usaOffice.city}
            </h3>

            <div
              style={{
                color: "#444",
                lineHeight: "2",
                fontSize: "15px",
              }}
            >
              {footerData.usaOffice.address.map((line, index) => (
                <div key={index}>{line}</div>
              ))}

              <div
                style={{
                  marginTop: "10px",
                  color: "#111",
                  fontWeight: "500",
                }}
              >
                {footerData.usaOffice.phone}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #ddd",
            paddingTop: "30px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <p
            style={{
              color: "#333",
              fontSize: "14px",
            }}
          >
            {footerData.copyright}
          </p>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{
              width: "42px",
              height: "42px",
              border: "1px solid #bbb",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#111",
              textDecoration: "none",
              transition: "0.3s",
              
            }}
          >
            <FaLinkedin size={18} />
          </a>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "18px",
            }}
          >
            {footerData.bottomLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontSize: "14px",
                }}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
