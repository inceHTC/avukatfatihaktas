import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

const articles = [
  {
    id: 1,
    title: 'Boşanma Davalarında Haklarınız',
    summary: 'Boşanma sürecinde nelere dikkat etmeli ve haklarınızı nasıl korumalısınız?',
    date: '15 Temmuz 2025'
  },
  {
    id: 2,
    title: 'Ticaret Hukukunda Yeni Düzenlemeler',
    summary: '2025 yılında ticaret hukukunda yapılan önemli değişiklikler ve etkileri.',
    date: '10 Temmuz 2025'
  },
  {
    id: 3,
    title: 'Miras Hukuku Temel Bilgiler',
    summary: 'Miras hukuku hakkında bilmeniz gereken temel noktalar ve sık sorulan sorular.',
    date: '5 Temmuz 2025'
  }
]

function Articles() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '80vh', padding: '3rem 0', backgroundColor: '#1e1e1e', color: '#e0e0e0' }}
    >
      <Container>
        <h2 className="mb-5 text-center" style={{ fontWeight: '700' }}>Makaleler</h2>
        <Row>
          {articles.map(article => (
            <Col md={4} key={article.id} className="mb-4">
              <Card style={{ height: '100%', backgroundColor: '#2e2e2e', color: '#f0f0f0' }}>
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{article.date}</Card.Subtitle>
                  <Card.Text>{article.summary}</Card.Text>
                  {/* İstersen buraya "Devamını Oku" linki ekleyebilirsin */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  )
}

export default Articles
