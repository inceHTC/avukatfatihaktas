import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="p-8 text-center text-red-600">
        Hizmet bulunamadı.
        <br />
        <button
          onClick={() => navigate("/hizmetler")}
          style={{
            marginTop: "2rem",
            padding: "0.7rem 1.5rem",
            backgroundColor: "#bfa243",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Hizmetlere Geri Dön
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#333",
        }}
      >
        {service.title}
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          style={{
            flex: "0 0 300px",
            width: "300px",
            height: "auto",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
        <p
          style={{
            flex: "1",
            fontSize: "1.125rem",
            lineHeight: "1.6",
            color: "#444",
            minWidth: "250px",
            maxWidth: "500px",
            textAlign: "justify",
          }}
        >
          {service.description}
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          efficitur, libero in maximus convallis, lorem orci accumsan purus,
          vitae consequat ex magna in ex. Curabitur non lorem at sapien
          porttitor consequat.
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <button
          onClick={() => navigate("/hizmetler")}
          style={{
            backgroundColor: "#bfa243",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a88a2b")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#bfa243")}
        >
          Hizmetlere Geri Dön
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
