import networkImage from "../../assets/images/homepage-network.webp";

const GlobalNetworkMap = () => {
  return (
    <section
      className="global-network-map-section"
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "20px 20px 80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={networkImage}
          alt="Our Global Network Map"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            borderRadius: "24px"
          }}
        />
      </div>
    </section>
  );
};

export default GlobalNetworkMap;
