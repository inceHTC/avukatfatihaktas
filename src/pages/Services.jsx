import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import servicesData from "../data/servicesData";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', backgroundColor: '#f8f9fa', minHeight: '80vh' }}>
      <Container>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>Hizmetlerimiz</h2>
        <Row>
          {servicesData.map(({ title, slug, description, icon }) => (
            <Col key={slug} xs={12} md={6} lg={4} className="mb-4">
              <Card
                onClick={() => navigate(`/hizmetler/${slug}`)}
                style={{ cursor: "pointer", height: '100%' }}
              >
                <Card.Body className="text-center">
                  {icon && <div style={{ marginBottom: "1rem", fontSize: "2rem", color: "#bfa243" }}>{icon}</div>}
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
