import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ icon, title, desc, link }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "1.8rem",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "160px",
        color: "#222",
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
      onClick={() => navigate(link)}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        style={{
          backgroundColor: "#f2f2f2",
          width: "70px",
          height: "70px",
          marginBottom: "1rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "36px",
          color: "#bfa243",
        }}
      >
        {icon}
      </div>
      <h3 style={{ marginBottom: "0.8rem", textAlign: "center" }}>{title}</h3>
      <p style={{ fontSize: "1rem", lineHeight: "1.4", textAlign: "center" }}>
        {desc}
      </p>
    </div>
  );
}
